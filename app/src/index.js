// @flow
import html from 'choo/html'
import choo from 'choo'
import homeView from './views/home'
import mediatingHafizView from './views/mediating-hafiz'
import thesisView from './views/thesis'
import notFound from './views/notFound'
import meta from './meta'
import './index.css'

var app = choo({
  hash: false,
})

app.use(meta)

app.route('/', homeView)
app.route('/mediating-hafiz', mediatingHafizView)
app.route('/thesis', thesisView)
app.route('/404', notFound)
app.route('/*', notFound)

app.mount('#app')
