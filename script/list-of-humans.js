import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'
import {zone} from 'mdast-zone'
import {commentMarker} from 'mdast-comment-marker'
import {u} from 'unist-builder'

const humans = yaml.load(fs.readFileSync(path.join('data', 'humans.yml')))
const teams = yaml.load(fs.readFileSync(path.join('data', 'teams.yml')))

const own = {}.hasOwnProperty

export default function listOfHumans() {
  return transform

  function transform(tree, file) {
    zone(tree, 'humans', onzone)

    function onzone(start, nodes, end) {
      const parameters = commentMarker(start).parameters
      const shift = parameters.shift || 0
      const name = parameters.team

      if (!name) {
        file.fail('Missing team attribute in humans marker', start)
      }

      const team = teams.find((s) => s.name === name)

      if (!team) {
        file.fail('Missing definition for team `' + name + '`', start)
      }

      const content = [u('heading', {depth: 1 + shift}, [u('text', 'Members')])]
      const byRole = {}
      let human

      for (human in team.humans) {
        if (own.call(team.humans, human)) {
          byRole[team.humans[human]] = (
            byRole[team.humans[human]] || []
          ).concat(human)
        }
      }

      if (team.collective) {
        content.push(
          byRole.maintainer
            ? list(team, byRole.maintainer)
            : u('paragraph', [u('text', 'None.')])
        )
      } else {
        content.push(
          u('heading', {depth: 2 + shift}, [u('text', 'Releasers')]),
          byRole.releaser
            ? list(team, byRole.releaser)
            : u('paragraph', [u('text', 'None.')]),
          u('heading', {depth: 2 + shift}, [u('text', 'Mergers')]),
          byRole.merger
            ? list(team, byRole.merger)
            : u('paragraph', [u('text', 'None.')])
        )
      }

      if (byRole.contributor) {
        content.push(
          u('heading', {depth: 1 + shift}, [u('text', 'Contributors')]),
          list(team, byRole.contributor)
        )
      }

      return [start].concat(content, end)
    }
  }
}

function list(team, users) {
  return u(
    'list',
    {ordered: false},
    users
      .map((github) => humans.find((p) => p.github === github))
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      .map((human) => {
        const content = [
          u('text', human.name + '\n('),
          u('link', {url: 'https://github.com/' + human.github}, [
            u('strong', [u('text', '@' + human.github)])
          ]),
          u('text', ')')
        ]

        if (human.email) {
          content.push(u('text', '\n<'), u('text', human.email), u('text', '>'))
        }

        if (human.github === team.lead) {
          content.push(
            u('text', '\n('),
            u('strong', [u('text', 'lead')]),
            u('text', ')')
          )
        }

        return u('listItem', [u('paragraph', content)])
      })
  )
}
