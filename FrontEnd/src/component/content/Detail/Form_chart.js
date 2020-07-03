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
            Doto: {
                cover_id: '',
                cover_song_name: '',
                cover_channel: '',
                views: 0
            },
            currentData: {},
        }
        // this.getData = this.getData.bind(this)
    }
    getData() {
        let option = {
            url: config.BASE_URL + config.ENDPOINTS.COVER,
            method: "post",
            data: this.state.cover
        }
        axios(option)
            .then((response) => {
                this.setState({
                    Doto: response.data.message
                })
                alert("data : " + JSON.stringify(response.data.message))
            })
            .catch((error) => {
                alert(error)
            })
    }
    componentDidMount() {
        this.getData()
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.data !== nextProps.data) {
            this.setState({ data: nextProps.data });
        }

        if (this.state.reorder !== nextProps.reorder) {
            this.setState({ reorder: nextProps.reorder });
        }

        if (this.state.streaming_id !== nextProps.streaming_id) {
            this.setState({ streaming_id: nextProps.streaming_id });
        }

    }

    render() {
        var headingStyle = {
            backgroundColor: '#d2d6de',
            fontSize: '1.2em'
        }


        return (
            <div className="form-inline">
                <div className="row">

                    <div className="col-md-1">
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.Doto.cover_id}
                            //onChange={(e) => this.handleChange(e, 'position')}
                            style={{ width: '120%' }}
                            minValue="1"
                            step="1"
                            required
                            readOnly

                        />
                    </div>

                    <div className="col-md-3">
                        {
                            (() => {
                                if (this.state.Doto.cover_id !== '') {
                                    return (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.Doto.cover_song_name || ''}
                                            // onChange={(e) => this.handleChange(e, 'song_name')}
                                            style={{ width: '120%', borderColor: '#3c763d' }}
                                            //id={"itemSong-" + this.state.data.index}
                                            placeholder="Song Name"

                                            autoComplete="off"
                                        />
                                    );
                                } else {
                                    return (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.Doto.cover_song_name || ''}

                                            //onChange={(e) => this.handleChange(e, 'song_name')}
                                            style={{ width: '120%' }}
                                            // id={"itemSong-" + this.state.data.index}
                                            placeholder="Song Name"

                                            autoComplete="off"
                                        />
                                    );
                                }
                            })()
                        }


                        {/* <Form.SuggestionSong
                            comp="song"
                            data={this.state.sugg_list}
                            id={'suggestion-form-song-' + this.props.index}
                            _addNewData={(comp, data, id, index, size) => this.props._addNewData(comp, this.state.data, id, this.state.data.index, size)}
                            _getSuggestion={(comp, item) => this._getSuggestion(comp, item)}
                            _hideSuggestion={() => this.props._hideSuggestion}
                        /> */}


                    </div>
                    <div className="col-md-3">
                        {
                            (() => {

                                return (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.Doto.cover_channel || ''}
                                        // onChange={(e) => this.handleChange(e, 'channelcover_channel')}
                                        style={{ width: '120%'}}
                                        //id={"itemSong-" + this.state.data.index}
                                        placeholder="Channel Name"

                                        autoComplete="off"
                                    />
                                );

                            })()
                        }



                    </div>


                    <div className="col-md-2">

                        {/* {
                            (() => {
                                if (this.state.data.label_id !== '') {
                                    return (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.data.label_name || ''}

                                            onChange={(e) => this.handleChange(e, 'label_name')}
                                            style={{ width: '100%', borderColor: '#3c763d' }}
                                            id={"itemLabel-" + this.state.data.index}
                                            placeholder="Label"

                                            autoComplete="off"
                                        />
                                    )
                                } else {
                                    return (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.data.label_name || ''}

                                            onChange={(e) => this.handleChange(e, 'label_name')}
                                            style={{ width: '100%' }}
                                            id={"itemLabel-" + this.state.data.index}
                                            placeholder="Label"

                                            autoComplete="off"
                                        />
                                    );
                                }
                            })()
                        } */}

                        {/* <Form.SuggestionLabel
                            comp="label"
                            data={this.state.sugg_list}
                            id={'suggestion-form-label-' + this.props.index}
                            _addNewData={(comp, data, id, index, size) => this.props._addNewData(comp, this.state.data, id, this.state.data.index, size)}
                            _getSuggestion={(comp, item) => this._getSuggestion(comp, item)}
                        /> */}
                    </div>

                    {
                        (() => {


                            return (
                                <div className="col-md-1">
                                    <input
                                        type="string"
                                        className="form-control"
                                        value={this.state.Doto.views}
                                        onChange={(e) => this.handleChange(e, 'views')}
                                        style={{ width: '100%' }}
                                        // id={"itemViews-" + this.state.data.index}
                                        placeholder="Views"
                                        autoComplete="off"
                                    />
                                </div>
                            )


                        })()


                    }
                </div>

                <hr />
            </div>
        )
    }
}

export default Form_chart
