import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import api from './api';

// Aqui são mostradas as informações do dia atual
// Como é a parte "principal" na teoria, deixei ela como trigger da função que consome a API

class Main extends Component {
    render() {
        return (
            <div class="main" id="main">
                {api.climas()}
            </div>
        )
    }
}

export default Main;