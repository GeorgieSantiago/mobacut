/* globals __DEV__ */
import Phaser from 'phaser';
import config from './config';
/*
 * Any helper methods that will spand the entire game can go here. :D
 */
export default class Eggshell extends Phaser.State{

  createCam(x,y) {
    this.camera.x = x;
    this.camera.y = y;
  }

  createObject(thing,type,cords) {
    if(type == "sprite") {
      let iam = this.game.add.sprite(cords.x,cords.y,thing)
      this.game.physics.arcade.enable(iam);
      iam.anchor.setTo(0.2);
      iam.frame=3;
      iam.body.enable = true;
      iam.body.collideWorldBounds = true;
      /*Merge object to story property*/
      return iam;
    }
  }
  playerController(){

  }

  createPlayer(pos) {

  }

  createMap(id, resources, sprite) {
    
  }


  /*
   *  @Hey! use this example object to make this call easy
   *  @param config {
   *    content: "",
   *    wordDelay : 160,
   *    lineDelay : 600,
   *    x: 32,
   *    y: 32
   *  }
   * */
  createScrollingText(config) {
    //TODO Make the scrolling text reusable. 
    console.log(config);
    this.line = [];
    this.text = this.game.add.text(config.x, config.y, '', { font: "15px Arial", fill: "#fff" });
    this.wordIndex = 0;
    this.lineIndex = 0;

    this.wordDelay = config.wordDelay;
    this.lineDelay = config.lineDelay;
    if (this.lineIndex === this.content.length)
    {
      //  We're finished
      return;
    }

    //  Split the current line on spaces, so one word per array element
    this.line = this.content[this.lineIndex].split(' ');

    this.add.text(this.line,this.game.world.centerX,this.game.world.centerY);

    //  Reset the word index to zero (the first word in the line)
    this.wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(this.wordDelay, this. line.length, this.nextWord,this );

    //  Advance to the next line
    this.lineIndex++;
  }

  nextWord() {
    //  Add the next word onto the text string, followed by a space
    this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");

    //  Advance the word index to the next word in the line
    this.wordIndex++;

    //  Last word?
    if (this.wordIndex === this.line.length)
    {
      //  Add a carriage return
      this.text.text = this.text.text.concat("\n");

      //  Get the next line after the lineDelay amount of ms has elapsed
      this.game.time.events.add(this.lineDelay, this.nextLine,this);
    }

  }

  /*
   *  @description Debugging method Console Dump Create method
   * */
  CDC() {
    /*TODO add more*/
    console.log("Camera",this.camera,"game also game.world",this.game,"Map",this.map);
  }

  /*
   *  @description Debugging method Console Dump Update method
   * */
  CDU() {
    console.log("Player",this.player); 
  }
}
