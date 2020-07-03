import React from 'react';
import axios from 'axios';
import $ from 'jquery'
import config from '../../../config/api.config.json'
// import Coverr from './Coverr'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentcoverid: {},
            cover: {
                id: '',
                position: '',
                artist_name: '',
                song_name: '',
                total_cover: '',
                total_views: ''
            },
            coverid: [{
                id: 0
            }],
            data: [{
                week: '',
                year: ''
            }],
            Coverr: [{
                id: 0,
                title: '',
                chanel: '',
                views: 0
            }],
            datafilter: [{
                id: 0,
                title: '',
                chanel: '',
                views: 0
            }],
            currentCoverr: [],
            currentID: {}
        }
    }
    handleChange(e, name) {
        var tmp = this.state.cover;
        tmp[name] = e.target.value
        this.setState({ cover: tmp })

    }
    getCoverID() {
        let option = {
            url: config.BASE_URL + config.ENDPOINTS.Read,
            method: "get"
        }
        axios(option)
            .then((response) => {
                this.setState({
                    coverid: response.data.message
                })
                alert("data coverID : " + JSON.stringify(response.data.message))
            })
            .catch((error) => {
                alert(error)
            })
    }
    componentDidMount() {
        this.getCoverID()
        // this.getTotalViews()
        // this.getTotalCover()
    }
    onUpdateItem = () => () => {
        this.setState((state) => {
            state.Coverr2.position = state.Coverr[0].id; // ngerubah tidak check jadi check
            return {
                id: state.Coverr2
            }
        })
        alert("cek nilai...." + JSON.stringify(this.state.Coverr2))
    }

    getStreamData() {
        //alert(JSON.stringify(this.state.cover))
        let option = {
            url: config.BASE_URL + config.ENDPOINTS.COVER,
            method: "post",
            data: this.state.cover
        }
        $('#loading-chart').show();
        axios(option)
            .then((response) => {
                if (response.data.code === 200) {
                    this.setState({
                        Coverr: response.data.message
                    })
                    alert("ini respon : " + response.data.message)
                    $('#loading-chart').hide()
                }
                else {
                    alert(response.data.message)
                    $('#loading-chart').hide()
                }
            })
            .catch((error) => {
                alert(error)
            })
    }
    printReport() {
        $('.page-header').show();
        var div = "datatable";
        var printContents = document.getElementById(div).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        $('.page-header').hide();
        window.location.reload();
    }
    showDate() {
        var year, week;
        $('#chart-period').css('display', 'inline');
        function getDate(week, year) {
            this.getDate(week, year);
        }
        var that = this;
        $('#chart-period').datepicker({
            onSelect: function (dateText, inst) {
                week = $.datepicker.iso8601Week(new Date(dateText));
                year = (new Date(dateText)).getUTCFullYear();
                var newData = that.state.data;
                newData['year'] = year;
                newData['week'] = week;
                that.setState({ data: newData });
            },
            orientation: 'auto bottom',
            changeMonth: true,
            changeYear: true,
            firstDay: 1,
            showWeek: true,
        });
    }

    submitHandle() {
        alert("ini datafilter : " + JSON.stringify(this.state.datafilter))
        //alert("ini data artist : " + JSON.stringify(this.state.cover))

        let option = {
            url: config.BASE_URL + config.ENDPOINTS.Tambah,
            method: "post",
            data: this.state.datafilter
        }
        axios(option)
            .then((response) => {
                alert("ini respon : " + response.data.code)
                if (response.data.code === 200) {

                    this.submitartist()
                    //this.postID()
                    alert("masuk submithandle : " + JSON.stringify(response.data.message))
                }
                else {
                    alert(response.data.message)
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    submitartist() {
        //alert("ini data Coverr : " + JSON.stringify(this.state.datafilter))
        //alert("ini data artist : " + JSON.stringify(this.state.cover))
        this.state.datafilter.id = this.state.coverid.id
        let option = {
            url: config.BASE_URL + config.ENDPOINTS.Artis,
            method: "post",
            data: this.state.cover
        }
        axios(option)
            .then((response) => {
                alert("ini respon : " + response.data.code)
                if (response.data.code === 200) {

                    //this.props.getCoverr()
                    //this.postID()
                    alert("masuk getCoverr : " + JSON.stringify(response.data.message))
                }
                else {
                    alert(response.data.message)
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    getDate(e) {
        var dateText = new Date(e.target.value);
        var newData = this.state.data;
        newData[0]['year'] = (new Date(dateText)).getUTCFullYear();;
        newData[0]['week'] = $.datetimepicker.iso8601Week(new Date(dateText));
        this.setState({ data: newData });
    }

    render() {
        // var print = this.state.Coverr[0].chanel

        this.state.datafilter = this.state.Coverr.filter((value) =>
            value.title.toLowerCase().includes(this.state.cover.song_name) && value.title.toLowerCase().includes('cover') && value.views > 1000
        )

        this.state.datafilter.sort((a, b) => b.views - a.views)
        var total = 0
        this.state.datafilter.map((item, i) =>
            total += parseInt(item.views)
        )
        // this.state.datafilter.map((item, i) =>
        //     item.id = this.state.coverid.id
        // ) 
        this.state.cover.total_cover = this.state.datafilter.length
        this.state.cover.total_views = total
        // alert(JSON.stringify(this.state.Coverr.id))
        // console.log('filter : ', datafilter)

        return (
            <div>
                <div style={{ display: 'none', textAlign: 'center', backgroundColor: 'white', zIndex: '999', position: 'absolute', fontSize: '3em', marginTop: '15%', marginLeft: '30%', marginRight: '30%', width: '400px', border: '3px solid whitesmoke', borderRadius: '10px' }} id="loading-chart">
                    <i className="glyphicon glyphicon-cloud-download" />
                    <br />
                    <p>Loading...</p>
                </div>
                <div className="form-group">
                    <label>Period (Year/Week)</label>
                    <div className="row" style={{ paddingLeft: '10px' }}>
                        <div className="col-md-3">
                            <input
                                type="text"
                                className="form-control datepicker"
                                id="chart-period"
                                onChange={(e) => this.getDate(e)}
                            />
                        </div>
                        <div className="col-md-2">
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.data.year}
                                onChange={(e) => this.handleChange(e, 'year')}
                                minValue="2016"
                                step="1"
                                maxValue="2100"
                                id="itemYear"
                                required
                                readOnly
                            />
                        </div>
                        <div className="col-md-1">
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.data.week}
                                onChange={(e) => this.handleChange(e, 'week')}
                                minValue="1"
                                step="1"
                                maxValue="53"
                                id="itemWeek"
                                required
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="itemArtist">URL (Cover Song)</label>
                    <div className="row" style={{ paddingLeft: '10px' }}>
                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cover.position}
                                onChange={(e) => this.handleChange(e, 'position')}
                                placeholder='Pos'
                                required
                            />

                        </div>

                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cover.artist_name}
                                onChange={(e) => this.handleChange(e, 'artist_name')}
                                placeholder='Artist Name'
                                required
                            />

                        </div>

                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cover.song_name}
                                onChange={(e) => this.handleChange(e, 'song_name')}
                                placeholder='Song Name'
                                required
                            />
                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cover.total_cover}
                                onChange={(e) => this.handleChange(e, 'total_cover')}
                                readOnly

                            />

                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cover.total_views}
                                onChange={(e) => this.handleChange(e, 'total_views')}
                                readOnly
                            />

                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-success" id="btn-stream" type="button" onClick={() => this.getStreamData()} data-toggle="tooltip" data-placement="top" title="Download Data">
                                <i className="glyphicon glyphicon-save" />
                            </button>
                            &nbsp;
                        {/* <button className="btn btn-warning" id="btn-stream" type="button" onClick={() => this.getStreamData()} data-toggle="tooltip" data-placement="top" title="Save">
                                <i className="glyphicon glyphicon-ok" />
                            </button>
                            &nbsp; */}
                            <button
                                className="btn btn-danger"
                                onClick={() => this.printReport()} data-toggle="tooltip" data-placement="top" title="Export to PDF" >
                                <i className="fa fa-print" />&nbsp;Export
                        </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="table table-hover table-dark">
                        <div className="btn-group pull-right" style={{ marginLeft: '5px' }}>
                            <button className="btn btn-sm btn-primary" >&larr;</button>
                            <button className="btn btn-sm btn-primary" >&rarr;</button>
                        </div>
                        &nbsp;&nbsp;
                    <div className="btn-group pull-right">
                            <button className="btn btn-sm btn-default" >All</button>
                            <button className="btn btn-sm btn-default" >100</button>
                            <button className="btn btn-sm btn-default" >50</button>
                            <button className="btn btn-sm btn-default" >30</button>
                            <button className="btn btn-sm btn-default" >20</button>
                            <button className="btn btn-sm btn-default" >10</button>
                        </div>
                        <div id="datatable" className="col-md-12" style={{ margin: '5px', verticalAlign: 'middle', align: 'top' }}>
                            <hr />
                            <div className="form-group">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <th style={{ textAlign: 'center' }}> Position </th>
                                        <th style={{ textAlign: 'center' }}> Artist </th>
                                        <th style={{ textAlign: 'left' }}> Title Song </th>
                                        <th style={{ textAlign: 'center' }}> Number of Cover </th>
                                        <th style={{ textAlign: 'center' }}> Number of Views </th>
                                    </thead>
                                    <tbody>

                                        <React.Fragment>
                                            <tr>
                                                <td style={{ textAlign: 'center' }} name="position" value={this.state.cover.position} onChange={(e) => this.handleChange(e, 'position')} readOnly>{this.state.cover.position}</td>
                                                <td style={{ textAlign: 'center' }} name="artist_name" value={this.state.cover.artist_name} onChange={(e) => this.handleChange(e, 'artist_name')} readOnly>{this.state.cover.artist_name}</td>
                                                <td style={{ textAlign: 'left' }} name="song_name" value={this.state.cover.song_name} onChange={(e) => this.handleChange(e, 'song_name')}>{this.state.cover.song_name}</td>
                                                <td style={{ textAlign: 'center' }} name="judul" value={this.state.cover.total_cover} onChange={(e) => this.handleChange(e, 'total_cover')}>{this.state.cover.total_cover}</td>
                                                <td style={{ textAlign: 'center' }} name="views" value={this.state.cover.total_views} onChange={(e) => this.handleChange(e, 'total_views')}>{Number(this.state.cover.total_views).toLocaleString()}</td>
                                            </tr>
                                        </React.Fragment>

                                    </tbody>
                                </table>
                                {/* <label htmlFor="itemArtist">Artist</label>
                                <div className="row" style={{ paddingLeft: '10px' }}>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.cover.artist_name}
                                            onChange={(e) => this.handleChange(e, 'artist_name')}
                                            placeholder='Artist Name'
                                            readOnly
                                        />

                                    </div>
                                    <div className="col-md-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.cover.song_name}
                                            onChange={(e) => this.handleChange(e, 'song_name')}
                                            placeholder='Song Name'
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.cover.total_cover}
                                            onChange={(e) => this.handleChange(e, 'total_cover')}
                                            readOnly

                                        />

                                    </div>
                                    <div className="col-md-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.cover.total_views}
                                            onChange={(e) => this.handleChange(e, 'total_views')}
                                            readOnly
                                        />

                                    </div>

                                </div> */}
                            </div>
                            <table class="table table-hover table-dark">
                                <thead>
                                    <th style={{ textAlign: 'center' }}> No </th>
                                    <th style={{ textAlign: 'left' }}> Title Cover Song </th>
                                    {/* <th style={{ textAlign: 'center' }}> Publish Date </th> */}
                                    <th style={{ textAlign: 'center' }}> Views </th>
                                    <th style={{ textAlign: 'center' }}> Channel </th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.datafilter.map((item, i) =>
                                            <React.Fragment>
                                                <tr>
                                                    <td style={{ textAlign: 'center' }} name="id" value={i++}>{i++}</td>
                                                    <td style={{ textAlign: 'left' }} name="judul" value={this.state.Coverr.title}>{item.title}</td>
                                                    {/* <td style={{ textAlign: 'left' }} name="judul" value={this.state.Coverr.title}><a href="https://www.youtube.com/" target="_blank">{item.title}</a></td> */}
                                                    {/* <td style={{ textAlign: 'center' }} name="judul" value={this.state.Coverr.title}>21 Jun 2019</td> */}
                                                    <td style={{ textAlign: 'center' }} name="views" value={this.state.Coverr.views}>{Number(item.views).toLocaleString()}</td>
                                                    <td style={{ textAlign: 'center' }} name="chanel" value={this.state.Coverr.chanel}>{(item.chanel).replace('montht', '')}</td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => this.submitHandle()} data-toggle="tooltip" data-placement="top" title="Submit" >
                        Submit
                </button>
                </div>
            </div>
        )
    }
}

export default Form