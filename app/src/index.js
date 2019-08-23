// @flow
import html from 'choo/html'
import choo from 'choo'
import homeView from './views/home'
import hafizView from './views/mediating-hafiz'
import thesisView from './views/thesis'
import notFound from './views/notFound'
import meta from './meta'
import log from './log'
import './index.css'

var app = choo({
  hash: false,
})

app.use(meta)
app.use(log)

app.route('/', homeView)
app.route('/mediating-hafiz', hafizView)
app.route('/thesis', thesisView)
app.route('/404', notFound)
app.route('/*', notFound)

app.mount('#app')
