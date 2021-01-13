import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Header from './Header';
import TimerCard from './TimerCard';
import {addTask, editTask, deleteTask, clearAllTasks} from '../actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.descRef = React.createRef();
    this.state = {
      timerOn: false,
      dtimerTime: 0,
      timerTime: 0,
      currentDescription: '',
      timers: [],
      order: 'DESC',
      projects: [
        // {   id: 0,   title: 'No Project',   color: 'black' },
        {
          id: 1,
          title: 'Jim Website',
          color: '#318F95'
        }, {
          id: 2,
          title: 'James Coffee',
          color: '#8B5A37'
        }, {
          id: 3,
          title: 'Personal Finance',
          color: '#27AE60'
        }
      ]
    }
  }

  //<-- CLEAR ALL-->//
  clearTimers = () => {
    this
      .props
      .clearAllTasks();
  }
  //<-- CLEAR Single ENTRY-->//
  clearTimer = (timer) => {
    this
      .props
      .deleteTask(timer);
  }


  //<-- INSERTING INTO LIST-->//
  manageTimer = () => {
      const { timerOn, dtimerTime, dtimerStart, currentDescription } = this.state;
    if (!timerOn) {
      this.setState({
        timerOn: true,
        dtimerTime: 0,
        dtimerStart: Date.now() - this.state.dtimerTime
      });
      this.timer = setInterval(() => {
        this.setState({
          dtimerTime: Date.now() - this.state.dtimerStart
        });
      }, 10);
    } else {
      const timer = {
        description: currentDescription,
        time: dtimerTime,
        startTime: dtimerStart,
        projid: this.menu.value,
        timerState: false
      }
      this
        .props
        .addTask(timer);
      this.setState({dtimerTime: 0, timerOn: false, currentDescription: ''})
      clearInterval(this.timer);
    }
  }
  newDescription = (timer) => {
  }

  
  render() {
    const {currentDescription, dtimerTime} = this.state;
    const sortedTimers = this.sortingFunction(this.props.tasks);

    return (
      <div className="box">
        <Header changeOrder={this.changeOrder} clearTimers={this.props.clearAllTasks}/>

        <div className="content">
          <svg
            id="playBtn"
            onClick={() => this.manageTimer()}
            width="36"
            height="36"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#E64E44"/>
            <path d="M18.2016 13L10.0242 17.7212L10.0242 8.27878L18.2016 13Z" fill="white"/>
          </svg>

          <input
            ref={(e1) => this.desc = e1}
            value={currentDescription}
            onChange={(e) => this.setState({currentDescription: e.target.value})}
            id="description"
            name="description"
            placeholder="Enter a Description...."></input>
          <span className="timerTop">{moment
              .utc(dtimerTime)
              .format('HH:mm:ss')}
          </span>
          <select id="projOption" name="projs" ref= {(input)=> this.menu = input}>
            {this.state.projects && this
              .state
              .projects
              .map((proj, i) => (
                <option
                  key={i}
                  value={proj.id}
                  style={{
                  color: proj.color
                }}>
                  Project: {proj.title}</option>
              ))}
            <option></option>
          </select>
          <div className="timers">
            {sortedTimers && sortedTimers
              .map((timer, i) => (<TimerCard
                key={i}
                clearTimer={this.clearTimer}
                newDescription={this.newDescription}
                continueTimer={this.continueTimer}
                timerData={timer}
                projData={this
                .state
                .projects
                .find((elemen) => {
                  return elemen.id === timer.projid
                })}/>))
}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {tasks: state.tasks, projects: state.projects}
}
export default connect(mapStateToProps, {addTask, editTask, deleteTask, clearAllTasks})(App);