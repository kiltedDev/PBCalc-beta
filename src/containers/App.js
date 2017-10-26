import React, { Component } from 'react'

import Select from '../components/Select'
import Reviews from '../components/Reviews'

import statValues from '../constants/statValues'
import raceStats from '../constants/raceStats'

import PBCalcForm from '../components/PBCalcForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statValues,
      raceStats,
      selectedRace: raceStats[0].name,
      strength: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
    this.selectedRace = this.selectedRace.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRace() {
    return this.state.raceStats.find((race) =>
      (race.name === this.state.selectedRace)
    )
  }

  render() {

    let races = []

    raceStats.map((race) => {
      races.push(race.name)
    })

    let selectedRaceDeets = this.state.raceStats.find(race =>
      race.name === this.state.selectedRace);

    let stats = [
      "Strength",
      "Constitution",
      "Dexterity",
      "Intelligence",
      "Wisdom",
      "Charisma"
    ]

    let wildcard = ""

    if (this.selectedRace().wild) {
      wildcard = <Select
        stats = {stats}
      />
    }

    return(
      <div>
        <div className="row">
          <div className="small-9 columns">
            <h2>Point Buy Calculator</h2>
            <PBCalcForm
            reviewSubmit={this.reviewSubmit}
            statValues={this.state.statValues}
            selectedRaceDeets={this.selectedRace()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
