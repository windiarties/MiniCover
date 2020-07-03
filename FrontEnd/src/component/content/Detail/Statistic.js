import React from 'react'
import $ from 'jquery'


class Statistic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    streaming_id: 1, streaming_name: '',
                    artist_id: '', artist_name: '',
                    label_id: '', label_name: '',
                    song_id: '', song_name: '',
                    views: '', version: '',
                    max_week: 53, min_week: 1,
                    week: '', year: '',
                    position: '',
                }
            ],
            dataSummarized: [
                {
                    streaming_id: '', streaming_name: '',
                    artist_id: '', artist_name: '',
                    label_id: '', label_name: '',
                    song_id: '', song_name: '',
                    views: '', version: '',
                    ranking: [
                        {
                            year: '',
                            week: '',
                            position: '',
                            status: '',
                        }
                    ],
                }
            ],
            columns: ['year', 'week', 'position'],
            color: 'default',
            headings: this.props.headings,
            firstColumn: 52,
            lastWeek: 53,
            numData: 10,
            totalData: 0,
            sortBy: 'diff'

        }

    }
    printReport() {
        $('.page-header').show();
        var div = "chartCover2-";
        var printContents = document.getElementById(div).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        $('.page-header').hide();
        window.location.reload();
    }

    render() {
        // var headings = this.props.headings.map(function (name, index) {
        //     return React.createElement(ListTable.Heading, { key: "heading-" + index, heading: name });
        // });

        return (
            <div >
                <div>
                    <div className={"box box-" + this.state.color}>

                        <div className="box-header with-border">
                            <div className="col-md-12" style={{ margin: '5px', verticalAlign: 'middle', align: 'top' }}>
                                <button className="btn btn-success" type="button" onClick={() => this.printReport()} data-toggle="tooltip" data-placement="top" title="Export to PDF">
                                    <i className="glyphicon glyphicon-download-alt" />
                                </button>
                                &nbsp;
        <h4 style={{ display: 'inline' }}>Chart Cover<small>{this.state.totalData} data</small></h4>
                                {
                                    (() => {
                                        if (this.state.data[0].streaming_id !== -1) {
                                            return (
                                                <div className="btn-group pull-right" style={{ marginLeft: '5px' }}>
                                                    <button className="btn btn-sm btn-default" >Diff</button>
                                                    <button className="btn btn-sm btn-default" >Views</button>
                                                </div>
                                            )
                                        }
                                    })()
                                }

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
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive" id="chartCover2-">
                                <div className="page-header" style={{ display: 'none' }}>
                                    <h3>Chart Cover
								<small>&nbsp;Period {this.state.data ? this.state.data.year : ''} / {this.state.data ? this.state.data.week : ''}</small>
                                    </h3>
                                    <p id="dateRange" style={{ fontSize: '0.75em' }}></p>
                                </div>
                                <table className="table table-condensed">
                                    {
                                        (() => {
                                            var ref = this.state.data[0] || { streaming_id: 1 }
                                            if (ref.streaming_id === 6 || ref.streaming_id === 10) {
                                                return (
                                                    this.state.columns
                                                )
                                            } else {
                                                return (
                                                    this.state.columns
                                                )
                                            }
                                        })()
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Statistic