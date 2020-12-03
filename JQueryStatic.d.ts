interface JQueryStatic {
  verto: Verto
  FSRTC: { checkPerms(callback: Function, audio: boolean, video: boolean): void }
}

interface Verto {
  new(...params: any): Agent;
  init(...params: any): any
  refreshDevices(callback: Function): any
  genUUID(): string
  audioInDevices: [],
  audioOutDevices: [],
  videoInDevices: [],
  videoOutDevices: []
}

interface AgentData {
  login: string,
  passwd: string
}

interface Agent {
  logout(): void;
  login(): void
  loginData(credential: AgentData): void
  newCall(params: any): void
}

interface Dialog {
  invite(): void
  sendMethod(method: any, obj: any): void
  setAudioPlaybackDevice(sinkId: any, callback: any, arg: any): void
  setState(state: string): void
  processReply(method: string, success: string, e: string): void
  hangup(params: any): void
  stopRinging(): void
  indicateRing(): void
  ring(): void
  useVideo(on: any): void
  setMute(what: any): void
  getMute(): void
  setVideoMute(what: any): void
  getVideoMute(): void
  useStereo(on: any): void
  dtmf(digit: string): void
  rtt(obj: any): void
  transfer(dest: string, params: any): void
  replace(replaceCallID: any, params: any): void
  hold(params: any): void
  unhold(params: any): void
  toggleHold(params: any): void
  message(msg: string): boolean
  answer(params: any): void
  handleAnswer(params: any): void
  cidString(enc: any): void
  sendMessage(msg: string, params: any): void
  handleInfo(params: any): void
  handleDisplay(params: any): void
  handleMedia(params: any): void
}
