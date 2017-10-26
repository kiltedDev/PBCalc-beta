import React, { Component } from 'react'

import Select from '../components/Select'
import Reviews from '../components/Reviews'

import statValues from '../constants/statValues'
import raceStats from '../constants/raceStats'

import PBCalcForm from '../components/PBCalcForm'
import AddRestaurantForm from '../components/AddRestaurantForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statValues,
      raceStats,
      selectedRace: raceStats[0].race_name,
      strength: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.reviewSubmit = this.reviewSubmit.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  reviewSubmit (submission) {
    submission.restaurant_id = this.state.selectedRace
    this.setState({ reviews: this.state.reviews.concat(submission) })
  }

  render() {

    let races = []

    raceStats.map((race) => {
      races.push(race.race_name)
    })

    let selectedRaceDeets = this.state.raceStats.find(race =>
      race.race_name === this.state.selectedRace);

    let stats = [
      "Strength",
      "Constitution",
      "Dexterity",
      "Intelligence",
      "Wisdom",
      "Charisma"
    ]

    let wildcard = ""

    if (selectedRaceDeets.wild) {
      wildcard = <Select
      stats = {stats}/>
    }

    return(
      <div>
        <div className="row">
          <div className="small-9 columns">
            <h2>Point Buy Calculator</h2>
            <PBCalcForm
            reviewSubmit={this.reviewSubmit}
            statValues={this.state.statValues}
            selectedRaceDeets={selectedRaceDeets}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
