interface JQueryStatic {
	verto: Verto
	FSRTC: { checkPerms(callback: Function, audio: boolean, video: boolean): void }
}

type StateCall =
	'answering' | 'active' | 'destroy' | 'early' | 'hangup' | 'held' | 'inbound' | 'recovering' | 'ringing' | 'trying'

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

interface VideoParams {
	minWidth: number,
	minHeight: number,
	maxWidth: number,
	maxHeight: number,
	minFrameRate: number,
	vertoBestFrameRate: string
}

interface CallParams {
	outgoingBandwidth: string,
	incomingBandwidth: string,
	useStereo: boolean,
	useVideo: boolean,
	useCamera: boolean,
	useSpeak: string,
	screenShare: boolean,
	dedEnc: boolean,
	mirrorInput: boolean
}

interface NewCallParams extends CallParams {
	destination_number: string,
	caller_id_name: string,
	caller_id_number: string,
}

type AnswerCallParams = CallParams;

interface Agent {
	broadcast(channel: any, params: any): void
	deviceParams(obj: any): void
	handleMessage(params: any): void
	hangup(callId?: string): void
	iceServers(obj: any): void
	login(): void
	loginData(credential: AgentData): void
	logout(): void;
	message(msg: any): boolean
	newCall(params: NewCallParams): Dialog
	processReply(method: string, sucess: boolean, e: any): void
	purge(): void
	sendMethod(method: any, obj: any): void
	subscriber(channel: any, sparams: any): []
	unsubscribe(handle: any): void
	videoParams(params: VideoParams): void
}

interface Dialog {
	direction: { name: StateCall }
	callID: string;
	state: { name: string }
	answer(params: AnswerCallParams): void
	cidString(enc: any): void
	dtmf(digit: string): void
	getMute(): void
	getVideoMute(): void
	hangup(params?: any): void
	handleAnswer(params: any): void
	handleDisplay(params: any): void
	handleInfo(params: any): void
	handleMedia(params: any): void
	hold(params?: any): void
	indicateRing(): void
	invite(): void
	message(msg: string): boolean
	processReply(method: string, success: string, e: string): void
	replace(replaceCallID: any, params: any): void
	ring(): void
	rtt(obj: any): void
	sendMessage(msg: string, params: any): void
	sendMethod(method: any, obj: any): void
	setAudioPlaybackDevice(sinkId: any, callback: any, arg: any): void
	setMute(what: any): void
	setState(state: string): void
	setVideoMute(what: any): void
	stopRinging(): void
	transfer(dest: string, params: any): void
	toggleHold(params: any): void
	unhold(params?: any): void
	useStereo(on: any): void
	useVideo(on: any): void
}
