function DisplayFreeSeats(props) {
  const seat = props.updatetable;

  return (
    <div>
      <h2></h2>
      <table>
        <tbody>
          <tr>
            {seats.slice(0, 5).map((row) => (
              <td
                key={row}
                style={
                  seat.includes(row)
                    ? { background: 'grey' }
                    : { background: 'red' }
                }
              >
                {' '}
                {row}{' '}
              </td>
            ))}
          </tr>
          <tr>
            {seats.slice(5, 10).map((row) => (
              <td
                key={row}
                style={
                  seat.includes(row)
                    ? { background: 'grey' }
                    : { background: 'red' }
                }
              >
                {' '}
                {row}{' '}
              </td>
            ))}
          </tr>
          <tr>
            {seats.slice(10, 15).map((row) => (
              <td
                key={row}
                style={
                  seat.includes(row)
                    ? { background: 'grey' }
                    : { background: 'red' }
                }
              >
                {' '}
                {row}{' '}
              </td>
            ))}
          </tr>
          <tr>
            {seats.slice(15, 20).map((row) => (
              <td
                key={row}
                style={
                  seat.includes(row)
                    ? { background: 'grey' }
                    : { background: 'red' }
                }
              >
                {' '}
                {row}{' '}
              </td>
            ))}
          </tr>
          <tr>
            {seats.slice(20, 25).map((row) => (
              <td
                key={row}
                style={
                  seat.includes(row)
                    ? { background: 'grey' }
                    : { background: 'red' }
                }
              >
                {' '}
                {row}{' '}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div>Grey: Available </div>
      <div>Red: Seat Taken</div>
      <br />
      <div>Total number of seats: 25</div>
      <div>Number of tickets available: {seat.length}</div>
      <div>Number of seats taken: {25 - seat.length}</div>
      <div>Seats available: {seat.map((x) => x + ', ')}</div>;
      <div>
        Seats taken:{' '}
        {seats.filter((x) => !seat.includes(x)).map((x) => x + ', ')}{' '}
      </div>
    </div>
  );
}

const seats = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', ];
const initialIssues = [];

function IssueRow(props) {
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.Name}</td>
      <td>{issue.handphone}</td>
      <td>{issue.email}</td>
      <th>{issue.seat}</th>
      <td>{issue.created.toDateString()}</td>
    </tr>
  );
}

function DisplayTraveller(props) {
  const issueRows = props.issues.map((issue) => (
    <IssueRow key={issue.id} issue={issue} />
  ));

  return (
    <table className='bordered-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Handphone number</th>
          <th>Email Address</th>
          <th>Seat number</th>
          <th>Date Purchased</th>
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

class AddTraveller extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.AddTraveller;

    if ( form.Name.value == '' || form.handphone.value == '' || form.email.value == '' || form.seat.value == '' ) {
      alert('Please fill the required fields');
    } else {
      // seats.remove(form.seat.value)
      const issue = {
        Name: form.Name.value.toUpperCase(),
        handphone: form.handphone.value,
        email: form.email.value,
        seat: form.seat.value,
      };

      this.props.createIssue(issue);
      form.Name.value = '';
      form.handphone.value = '';
      form.email.value = '';
      form.seat.value = '1';
    }
  }

  render() {
    return (
      <form name='AddTraveller' onSubmit={this.handleSubmit}>
        <input type='text' name='Name' placeholder='Name' />
        <input type='text' name='handphone' placeholder='Handphone number' />
        <input type='text' name='email' placeholder='Email Address' />
        <select name='seat' placeholder='Seat number'>
          <option value='1'>Seat 1</option>
          <option value='2'>Seat 2</option>
          <option value='3'>Seat 3</option>
          <option value='4'>Seat 4</option>
          <option value='5'>Seat 5</option>
          <option value='6'>Seat 6</option>
          <option value='7'>Seat 7</option>
          <option value='8'>Seat 8</option>
          <option value='9'>Seat 9</option>
          <option value='10'>Seat 10</option>
          <option value='11'>Seat 11</option>
          <option value='12'>Seat 12</option>
          <option value='13'>Seat 13</option>
          <option value='14'>Seat 14</option>
          <option value='15'>Seat 15</option>
          <option value='16'>Seat 16</option>
          <option value='17'>Seat 17</option>
          <option value='18'>Seat 18</option>
          <option value='19'>Seat 19</option>
          <option value='20'>Seat 20</option>
          <option value='21'>Seat 21</option>
          <option value='22'>Seat 22</option>
          <option value='23'>Seat 23</option>
          <option value='24'>Seat 24</option>
          <option value='25'>Seat 25</option>
        </select>
        <button>Add</button>
      </form>
    );
  }
}

class DeleteTraveller extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.DeleteTraveller;

    if (form.Name.value == '' || form.seat.value == '') {
      alert('Please fill the required fields');
    } else {
      // seats.remove(form.seat.value)
      const issue = {
        Name: form.Name.value.toUpperCase(),
        seat: form.seat.value,
      };
      // seats = seats.splice([form.seat.value - 1];
      this.props.deleteIssue(issue);
      form.Name.value = '';
      form.seat.value = '';
    }
  }

  render() {
    return (
      <form name='DeleteTraveller' onSubmit={this.handleSubmit}>
        <input type='text' name='Name' placeholder='Enter Name' />
        <input type='text' name='seat' placeholder='Enter Seat Number' />
        <button>Delete Reservation</button>
      </form>
    );
  }
}

class DisplayHomepage extends React.Component {
  render(){
    return (
    <div>
      <h1>Welcome to Singapore High Speed Rail network</h1>
    </div>
    );
  }}

class App extends React.Component {
  constructor() {
    super();
    this.state = {  issues: [],seat_number: seats,currentPath : "4"};
    this.deleteIssue = this.deleteIssue.bind(this);
    this.createIssue = this.createIssue.bind(this);
    this.traveller = this.traveller.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.home = this.home.bind(this);
    this.free = this.free.bind(this);
  }

    componentDidMount() {
    this.setState({ issues: initialIssues });
  }

  createIssue(issue) {
    const checkname = [];
    this.state.issues.map((x) => {
      if (issue.Name == x.Name) {
        checkname.push(issue.Name);
      }
    });

    if (
      this.state.seat_number.includes(issue.seat) &&
      !checkname.includes(issue.Name)
    ) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date();
      const newIssueList = this.state.issues.slice();
      const newseat = [];
      this.state.seat_number.map((x) => {
        if (issue.seat != x) {
          newseat.push(x);
        }
      });
      newIssueList.push(issue);
      this.setState({ issues: newIssueList });
      this.setState({ seat_number: newseat });
      alert('Sucessfully Added');
    } else {
      alert('Duplicated Name or Seat Number. Please choose another seat or Name!');
    }
  }

  deleteIssue(issue) {
    if (this.state.seat_number.includes(issue.seat) == false) {
      //  newseat = seats;
      const newIssueList = [];
      var removeList = this.state.seat_number.slice();
      var seatlist = [];
      var a = false;
      this.state.issues.map((x) => {
        if (x.Name != issue.Name) {
          newIssueList.push(x);
        } else {
          a = true;
        } // alert("got item")
      });
      removeList.push(issue.seat);

      if (a != true) {
        alert('No records found. Please enter the correct name!');
      } else {
        this.setState({ issues: newIssueList });
        this.setState({ seat_number: removeList.sort((x) => parseInt(x)) });
        alert("Sucessfully Deleted")
      }
    } else {
      alert('No Records found! Please provide correct info');
    }
  }


  traveller(){this.setState({currentPath : "1"})}
  add(){this.setState({currentPath : "2"})}
  delete(){this.setState({currentPath : "3"})}
  home(){this.setState({currentPath : "4"})}
  free(){this.setState({currentPath : "5"})}

  render(){
    return (
      <div>
        <h1>Singapore Government High Speed Rail Network</h1>
        <br />
        <button onClick={this.home}>Homepage</button>
        <button onClick={this.traveller}>Display Traveller</button>
        <button onClick={this.add}>Add Traveller</button>
        <button onClick={this.delete}>Delete Traveller</button>
        <button onClick={this.free}>Display Free seats</button>

        <br/>
        <br/>
        {this.state.currentPath === '1' ? ( <DisplayTraveller issues={this.state.issues} /> ) : null}
        {this.state.currentPath === '2' ? ( <AddTraveller createIssue={this.createIssue} /> ) : null}
        {this.state.currentPath === '3' ? ( <DeleteTraveller deleteIssue={this.deleteIssue} /> ) : null}
        {this.state.currentPath === '4' ? ( <DisplayHomepage /> ) : null}
        {this.state.currentPath === '5' ? ( <DisplayFreeSeats updatetable={this.state.seat_number} /> ) : null}
      </div>
    );
  }}

const element = <App />;

ReactDOM.render(element, document.getElementById('contents'));
