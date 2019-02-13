import {Router} from 'express';
import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import 'ignore-styles'
// Register(['sass','.scss'])
import Login from '../src/Components/Login.jsx';
import Home from '../src/Components/Home.jsx';
import template from './template.js'
import Form from '../src/Components/Form.jsx';

const router = Router();

router.get('/', (req, res) => {
    const content = renderToString(<Home />);
    const html = template(content,'socketchatSSR')
    res.send(html)
})

router.get('/login', (req, res) => {
    const content = renderToString(<Login/>)
    const html = template(content, 'formCheck')
    res.send(html)
})
export default router;