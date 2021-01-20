import React, { Component } from 'react'
import styles from '../styles/DevicePreview.module.css'

let settings = {
  width: 70.9,
  height: 143.6,
  depth: 7.7,
  inch: 6.8,
  weight: 111,
  zoom: 1,
}

class DevicePreview extends Component {
  constructor(props) {
    super(props)
    this.initialize(props)
    this.state = {
      rootSize: {
        height: '0',
      },
      size: {
        width: '0',
        height: '0',
      },
      window_size: {
        width: '0',
        height: '0',
        transform: '',
      },
      side_view_size: {
        width: '0',
        height: '0',
      },
      window_border: {
        borderWidth: '',
      },
    }
  }

  componentDidMount() {
    let window_width = window.outerWidth
    let ZOOM = 0
    ZOOM = window_width < 480 ? 2.4 : 3.33
    let v_width = settings.width * ZOOM,
      v_height = settings.height * ZOOM,
      v_depth = settings.depth * ZOOM
    this.setState({
      rootSize: { height: String(v_height + 60) + 'pt' },
      size: {
        width: String(v_width) + 'pt',
        height: String(v_height) + 'pt',
      },
      window_size: {
        width: String(v_width) + 'pt',
        height: String(v_height) + 'pt',
        transform: 'scale(0.95, 0.97)',
      },
      side_view_size: {
        height: String(v_height) + 'pt',
        width: String(v_depth) + 'pt',
      },
      window_border: {
        borderWidth: `${v_height}pt ${v_width}pt 0 0`,
      },
    })
  }

  initialize(props) {
    if (props.width == null) {
      console.warn('[DEBUG](devicePreview) use default')
      return
    } else {
      settings.width = props.width
      settings.height = props.height
      settings.depth = props.depth
      settings.inch = props.inch
      settings.weight = props.weight
    }
  }

  render() {
    return (
      <div className={styles.root} style={this.state.rootSize}>
        <div className={styles.wrapper}>
          <div style={this.state.side_view_size} className={styles.side}>
            <p className={`${styles.text} ${styles.text_depth}`}>
              <span className={styles.caption}>厚さ</span>
              <br />
              {settings.depth + 'mm'}
            </p>
          </div>
          <div style={this.state.size} className={styles.device_body}>
            <p className={`${styles.text} ${styles.text_width}`}>
              <span className={styles.caption}>横幅</span>
              <br />
              {settings.width + 'mm'}
            </p>

            <p className={`${styles.text} ${styles.text_height}`}>
              <span>
                <span className={styles.caption}>高さ</span>
                <br />
                {settings.height + 'mm'}
              </span>
              <span className={`${styles.text} ${styles.text_weight}`}>
                <span className={styles.caption}>重さ</span>
                <br />
                {settings.weight + 'g'}
              </span>
            </p>

            <div
              className={styles.device_window}
              style={this.state.window_size}
            >
              <span className={styles.window_text}>
                {settings.inch}
                <p>インチ</p>
              </span>
              <div
                className={styles.device_window_inner}
                style={this.state.window_border}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DevicePreview
