import React from 'react'


class Song extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                index: 0,
                song: '',
                song_id: '',
                song_name: '',
                channel_id: '',
                channel_name: '',
                views: 0,
                position: 1,
                youtube_published: '', youtube_url: ''
            },
        }
    }
    
    componentWillReceiveProps(nextProps) {
		if (this.state.data !== nextProps.data) {
			this.setState({ data: nextProps.data });
		}
	}

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="formsong">Song</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.data.song}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="itemChannel">Channel</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.data.channel_name || ''}
                        autoComplete="off"
                        required
                    />
                </div>

            </div>
        )
    }
}

export default Song