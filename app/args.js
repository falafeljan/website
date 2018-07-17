// @flow
import b64DecodeUnicode from './b64'

export const emailAddress = b64DecodeUnicode(process.env.EMAIL_ADDRESS || '')
