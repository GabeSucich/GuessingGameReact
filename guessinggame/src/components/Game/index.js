import React from 'react'
import Card from "../Card"
import Navbar from "../Navbar"
import images from "../../images.json"
import "./style.css"

class Game extends React.Component {

    state = {
        images: images,
        currentScore: 0,
        highScore: 0
    }

    resetGame() {
        this.resetScore()
        this.resetImages()
        this.shuffleCards()
    }

    shuffleCards() {
        var shuffledArr = []
        var imgArr = this.state.images
        while (imgArr.length > 0) {
            var randomIndex = Math.floor(imgArr.length * Math.random())
            shuffledArr.push(imgArr[randomIndex])
            imgArr.splice(randomIndex, 1)
            
        }
        this.setState({ images: shuffledArr })
    }

    resetScore() {
        this.setState({ currentScore: 0 })
    }

    resetImages() {

        const allImages = this.state.images

        for (const image of allImages) {
            image.guessed = false
        }

        this.setState({ images: allImages })
    }

    handleCorrectGuess() {
        var currentScore = this.state.currentScore
        var highScore = this.state.highScore
        currentScore += 1
        if (currentScore > highScore) {
            highScore += 1
        }
        if (this.state.currentScore === 12) {
            this.resetImages()
        }
        this.setState({currentScore: currentScore, highScore: highScore})
        this.shuffleCards()
    }

    processGuess(id) {
        for (const image of this.state.images) {
            if (image.id === id) {
                if (image.guessed) {
                    this.resetGame()
                }
                else {
                    image.guessed = true
                    this.setState({images: this.state.images})
                    this.handleCorrectGuess()
                }
            }
        }
    }

    componentDidMount() {
        this.shuffleCards()
    }

    render() {
        return (
            <div>
                <Navbar currentScore={this.state.currentScore} highScore={this.state.highScore} />
                <div className="container pic-div">
                    <div className="row">
                        {this.state.images.map(item =>
                            <Card onClick={() => this.processGuess(item.id)} src={item.src} alt={item.alt} key={item.id} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game