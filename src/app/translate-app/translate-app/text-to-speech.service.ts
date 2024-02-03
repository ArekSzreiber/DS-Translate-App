import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  isSpeaking: boolean = false;
  private synthesis: SpeechSynthesis;

  constructor() {
    this.synthesis = window.speechSynthesis;
  }

  speak(text: string, language: string): void {
    if (this.isSpeaking) {
      this.stop();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    this.isSpeaking = true;
    this.synthesis.speak(
      utterance
    );
    utterance.onend = (event) => {
      this.isSpeaking = false;
    }
  }

  stop(): void {
    this.synthesis.cancel();
    this.isSpeaking = false;
  }

}
