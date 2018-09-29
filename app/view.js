// @flow
export type MetaState = {
  title: ?string,
  description: ?string,
}

export type State = {
  meta: MetaState,
}

export type Emitter = (action: string, data: any) => void
export type EmissionHandler = {
  on: (eventName: string, callback: (...any) => void) => void,
}
