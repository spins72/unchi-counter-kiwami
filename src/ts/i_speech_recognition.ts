interface ISpeechRecognitionEvent {
    isTrusted?: boolean;
    resultIndex: number;
    results: {
      isFinal: boolean;
      [key: number]:
        | {
            transcript: string;
          };
    }[];
  }

  interface SpeechRecognitionErrorEvent {
    error: any;
    message: string;
  }
  
  interface ISpeechRecognition extends EventTarget {
    // properties
    grammars: string;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;
  
    // event handlers
    onaudiostart: () => void;
    onaudioend: () => void;
    onend: () => void;
    onerror: (event: SpeechRecognitionErrorEvent) => void;
    onnomatch: () => void;
    onresult: (event: ISpeechRecognitionEvent) => void;
    onsoundstart: () => void;
    onsoundend: () => void;
    onspeechstart: () => void;
    onspeechend: () => void;
    onstart: () => void;
  
    // methods
    abort(): void;
    start(): void;
    stop(): void;
  }
  
  export default ISpeechRecognition;
  