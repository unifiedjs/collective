/**
 * @import {BlockContent, ListItem, List, PhrasingContent, Root} from 'mdast'
 * @import {Plugin} from 'unified'
 */

/**
 * @typedef {'contributor' | 'merger' | 'maintainer' | 'releaser'} Role
 *
 * @typedef Team
 * @property {string} name
 * @property {boolean | undefined} [collective]
 * @property {string | undefined} [lead]
 * @property {Record<string, Role>} humans
 *
 * @typedef Human
 * @property {string} name
 * @property {string} email
 * @property {string} url
 * @property {string} github
 * @property {string | undefined} [npm]
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import yaml from 'yaml'
import {zone} from 'mdast-zone'
import {commentMarker} from 'mdast-comment-marker'

/** @type {Array<Human>} */
const humans = yaml.parse(
  String(await fs.readFile(new URL('../data/humans.yml', import.meta.url)))
)
/** @type {Array<Team>} */
const teams = yaml.parse(
  String(await fs.readFile(new URL('../data/teams.yml', import.meta.url)))
)

const own = {}.hasOwnProperty

/** @type {Plugin<[], Root>} */
export default function listOfHumans() {
  return function (tree, file) {
    zone(tree, 'humans', function (start, nodes, end) {
      const parameters = commentMarker(start)?.parameters || {}
      const shift = Number(parameters.shift) || 0
      const name = parameters.team

      if (!name) {
        file.fail('Missing team attribute in humans marker', start)
      }

      const team = teams.find((s) => s.name === name)

      if (!team) {
        file.fail('Missing definition for team `' + name + '`', start)
        return
      }

      /** @type {Array<BlockContent>} */
      const content = [
        {
          type: 'heading',
          // @ts-expect-error: fine.
          depth: 1 + shift,
          children: [{type: 'text', value: 'Members'}]
        }
      ]
      /** @type {Partial<Record<Role, Array<string>>>} */
      const byRole = {}
      /** @type {string} */
      let human

      for (human in team.humans) {
        if (own.call(team.humans, human)) {
          const role = team.humans[human]
          const list = byRole[role]
          if (Array.isArray(list)) {
            list.push(human)
          } else {
            byRole[role] = [human]
          }
        }
      }

      if (team.collective) {
        content.push(
          byRole.maintainer
            ? list(team, byRole.maintainer)
            : {type: 'paragraph', children: [{type: 'text', value: 'None.'}]}
        )
      } else {
        content.push(
          {
            type: 'heading',
            // @ts-expect-error: fine.
            depth: 2 + shift,
            children: [{type: 'text', value: 'Releasers'}]
          },
          byRole.releaser
            ? list(team, byRole.releaser)
            : {type: 'paragraph', children: [{type: 'text', value: 'None.'}]},
          {
            type: 'heading',
            depth: 2 + shift,
            children: [{type: 'text', value: 'Mergers'}]
          },
          byRole.merger
            ? list(team, byRole.merger)
            : {type: 'paragraph', children: [{type: 'text', value: 'None.'}]}
        )
      }

      if (byRole.contributor) {
        content.push(
          {
            type: 'heading',
            // @ts-expect-error: fine.
            depth: 1 + shift,
            children: [{type: 'text', value: 'Contributors'}]
          },
          list(team, byRole.contributor)
        )
      }

      return [start].concat(content, end)
    })
  }
}

/**
 * @param {Team} team
 * @param {Array<string>} users
 * @returns {List}
 */
function list(team, users) {
  return {
    type: 'list',
    ordered: false,
    children: users
      .map((github) => {
        const human = humans.find((p) => p.github === github)
        assert(human, 'expected human')
        return human
      })
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      .map((human) => {
        /** @type {Array<PhrasingContent>} */
        const content = [
          {type: 'text', value: human.name + '\n('},
          {
            type: 'link',
            url: 'https://github.com/' + human.github,
            children: [
              {
                type: 'strong',
                children: [{type: 'text', value: '@' + human.github}]
              }
            ]
          },
          {type: 'text', value: ')'}
        ]

        if (human.email) {
          content.push({type: 'text', value: '\n<' + human.email + '>'})
        }

        if (human.github === team.lead) {
          content.push(
            {type: 'text', value: '\n('},
            {type: 'strong', children: [{type: 'text', value: 'lead'}]},
            {type: 'text', value: ')'}
          )
        }

        /** @type {ListItem} */
        const result = {
          type: 'listItem',
          children: [{type: 'paragraph', children: content}]
        }

        return result
      })
  }
}
