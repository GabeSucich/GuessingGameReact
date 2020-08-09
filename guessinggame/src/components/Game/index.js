import React from 'react'
import Card from "../Card"
import images from "../../images.json"


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
        while (imgArr) {
            var randomIndex = imgArr.length*Math.random()
            newArr.push(imgArr[randomIndex])
            imgArr.splice(randomIndex, 1)
        }
        this.setState({images: shuffledArr})
    }

    resetScore() {
        this.setState({currentScore: 0})
    }

    resetImages() {

        const allImages = this.state.images

        for (const image of allImages) {
            image.guessed = false
        }

        this.setState({images: allImages})
    }

    handleCorrectGuess() {
        this.setState({currentScore: this.currentScore + 1})
        if (this.currentScore > this.highScore) {
            this.setState({highScore: this.currentScore})
        }
        if (this.currentScore === 12) {
            this.resetImages()
        }
        this.shuffleCards()
    }

    processGuess(id) {
        const allImages = this.state.images
        for (const image of allImages) {
            if (image.id === id) {
                if (image.guessed) {
                    this.resetGame()
                }
                else {
                    this.handleCorrectGuess()
                }
            }
        }
    }

    render() {
        return (
            this.state.images.map(item => {
                <Card src={item.src}/>
            })
        )
    }
}