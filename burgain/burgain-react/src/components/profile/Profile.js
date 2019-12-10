import React, { Component } from 'react';
import './profile.scss';
import { Tabs, Tab, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllItems } from '../../redux/action/itemAction';
import { connect } from 'react-redux';

class Profile extends Component {
  componentDidMount() {
    this.props.getAllItems()
  }

  getFavorites(favorites) {
    favorites.map(item => { return item.title })
  }

  render() {
    const { user } = this.props.user
    console.log(user)
    return (
      <div className="profile-outbox">
        <div className="row card-outbox">
          <div className="col-lg-4 col-md-3 col-centered section1">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="default" />
                <h2><p className="card-title"> {user[0].firstName + " " + user[0].lastName}  </p></h2>
                {/* <h5><p className="card-subtitle"> "Gender" </p></h5>
                <h5><p className="card-subtitle"> College </p></h5>
                <h5><p className="card-subtitle"> Graduation Year </p></h5> */}
            </div>
          <div className="col-lg-4 col-md-3 col-centered section2">
            <Tabs defaultActiveKey="connections" transition={false} id="noanim-tab-example">
              <Tab eventKey="connections" title="Connections">
                blah blah blah
              </Tab>
              <Tab eventKey="selling items" title="Selling Items" className="myItem">
                {this.props.item.map((my,index) => 
                  <Card key={index} >
                    <Link to={'/' + my.id} className="link">
                      <Card.Img variant="top" src={my.img} style={{ width: '8rem' }}/>
                      <Card.Body > <Card.Text>{my.title}</Card.Text> </Card.Body>
                    </Link>
                  </Card>
                )}
              </Tab>
              {(this.props.location.pathname.split('/').slice(-1)[0] == user[0].id) && 
                <Tab eventKey="favorite" title="Favorite" className="favorite">
                  {this.props.item.map((fav,index) => 
                    <Card key={index} >
                      <Link to={'/' + fav.id} className="link">
                        <Card.Img variant="top" src={fav.img} style={{ width: '8rem' }}/>
                        <Card.Body > <Card.Text>{fav.title}</Card.Text> </Card.Body>
                      </Link>
                    </Card>
                  )}
                </Tab>
              }
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    item: state.item.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // favoriteItem: (idList) => { dispatch(getItemById(idList)) },
    getAllItems: () => { dispatch(getAllItems()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
// export default Profile