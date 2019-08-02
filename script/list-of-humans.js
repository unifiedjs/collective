'use strict'

var fs = require('fs')
var path = require('path')
var yaml = require('js-yaml')
var zone = require('mdast-zone')
var marker = require('mdast-comment-marker')
var u = require('unist-builder')

var humans = yaml.safeLoad(fs.readFileSync(path.join('data', 'humans.yml')))
var teams = yaml.safeLoad(fs.readFileSync(path.join('data', 'teams.yml')))

module.exports = listOfHumans

function listOfHumans() {
  return transform

  function transform(tree, file) {
    zone(tree, 'humans', onzone)

    function onzone(start, nodes, end) {
      var params = marker(start).parameters
      var shift = params.shift || 0
      var name = params.team

      if (!name) {
        file.fail('Missing team attribute in humans marker', start)
      }

      var team = teams.find(s => s.name === name)

      if (!team) {
        file.fail('Missing definition for team `' + name + '`', start)
      }

      var content = [u('heading', {depth: 1 + shift}, [u('text', 'Members')])]

      var byRole = Object.keys(team.humans).reduce((all, h) => {
        var role = team.humans[h]
        all[role] = (all[role] || []).concat(h)
        return all
      }, {})

      if (team.collective) {
        content.push(
          byRole.member
            ? list(team, byRole.member)
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

      if (byRole.emeritus) {
        content.push(
          u('heading', {depth: 1 + shift}, [u('text', 'Emeriti')]),
          list(team, byRole.emeritus)
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
      .map(github => humans.find(p => p.github === github))
      .sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      .map(function(human) {
        var content = [
          u('text', human.name + '\n('),
          u('link', {url: 'https://github.com/' + human.github}, [
            u('strong', [u('text', '@' + human.github)])
          ]),
          u('text', ')\n<'),
          u('text', human.email),
          u('text', '>')
        ]

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
