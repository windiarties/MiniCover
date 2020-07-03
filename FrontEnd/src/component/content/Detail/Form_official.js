import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Song from './Song'
import $ from 'jquery'
import { createConfigItem } from '@babel/core';
import config from '../../../config/api.config.json'
import API from '../../../helpers/API_Login'


class Form_chart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Offc: [{
                official_song_name: '',
                singer_name: '',
                label_name: '',
                official_views: 0,
                cover_views: 0
            }]
        }
        // this.getStreamData = this.getStreamData.bind(this)
        //  this.getData = this.getData.bind(this)
    }
    getOffc() {
        let option = {
            url: config.BASE_URL + config.ENDPOINTS.OFFICIAL,
            method: "get"
        }
        axios(option)
            .then((response) => {
                this.setState({
                    Offc: response.data.message
                })
                alert("data offc... : " + JSON.stringify(response.data.message))
            })
            .catch((error) => {
                alert(error)
            })
    }

    componentDidMount() {
        this.getOffc()
    }
    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <th style={{ textAlign: 'center' }}> Official Song Name </th>
                    <th style={{ textAlign: 'left' }}> Singer Name </th>
                    <th style={{ textAlign: 'center' }}> Label Name </th>
                    <th style={{ textAlign: 'center' }}> Official Views </th>
                    <th style={{ textAlign: 'center' }}> Cover Views </th>
                </thead>
                <tbody>

                    {
                        this.state.Offc.map((row, i) =>
                            <React.Fragment>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>{row.official_song_name}</td>
                                    <td style={{ textAlign: 'left' }}>{row.singer_name}</td>
                                    <td style={{ textAlign: 'center' }}>{row.label_name}</td>
                                    <td style={{ textAlign: 'center' }}>{row.official_views}</td>
                                    <td style={{ textAlign: 'center' }}>{row.cover_views}</td>
                                </tr>
                            </React.Fragment>

                        )
                    }


                </tbody>

            </table>
        )
    }
}

export default Form_chart
