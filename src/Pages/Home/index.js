import React, { Component, Fragment } from 'react';
import SearchBar from '../../Components/SearchBar';
import logo from '../../Resources/images/logo.svg';
import logo2 from '../../Resources/images/logo2.svg';
import logo3 from '../../Resources/images/logo3.svg';
import logo4 from '../../Resources/images/logo4.svg';
import ramsay from '../../Resources/images/bolton.svg';
import johnSnow from '../../Resources/images/johnSnow.svg';
import { searchForBattles } from '../../Services/Battles';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

class index extends Component {
  constructor(props) {
    super(props);
  }

  updateTheBattleDetails = async (data) => {
    let query = data.split(',');
    console.log('The query here is --> ', query);
    let result = '';
    if (query[0] == 'King')
      result = await searchForBattles(query[1], false, false)
    if (query[0] == 'Location')
      result = await searchForBattles(false, query[1], false)
    if (query[0] == 'Type')
      result = await searchForBattles(false, false, query[1])
    // updating the props
    this.props.storeLocationList(result.results);
  }

  render() {
    const { battle, locationList } = this.props;
    return (
      <Fragment>
        <div className="container-fluid py-4 backgroundPattrn">
          <div className="row px-4 py-2">
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <div className="col-md-6 m-3 expand expand-portrait text-white">
                  <a href="https://fontmeme.com/game-of-thrones-font/"><img src="https://fontmeme.com/permalink/200227/d3f2919b6356d629c15beea3e1f139e0.png" alt="game-of-thrones-font" border="0" /></a>
                  <div class="d-flex align-items-center py-3">
                    <SearchBar updateTheBattleDetails={this.updateTheBattleDetails} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div class="d-flex flex-row bd-highlight mb-3">
                <img src={logo} alt="icon" width="80px" className="mr-2" />
                <img src={logo2} alt="icon" width="80px" className="mr-2" />
                <img src={logo3} alt="icon" width="80px" className="mr-2" />
                <img src={logo4} alt="icon" width="80px" className="mr-2" />
              </div>
            </div>
          </div>
          <div className="row my-1 ">
            <div className="col-md-12">
              <div class="d-flex justify-content-center my-5">
                <a href="https://fontmeme.com/game-of-thrones-font/"><img src="https://fontmeme.com/permalink/200227/243ea3b3bc4332def6984631bbb8b624.png" alt="game-of-thrones-font" border="0" /></a>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <img className="rounded-circle z-depth-2" width="20%" alt="100x100" src={johnSnow}
                data-holder-rendered="true" />
              <img className="rounded-circle z-depth-2" alt="100x100" width="20%" src={ramsay}
                data-holder-rendered="true" />
            </div>
            <div className="table-battle-list px-3">
              {locationList.length &&
                <div class="d-flex justify-content-center my-5">
                  <a href="https://fontmeme.com/game-of-thrones-font/"><img src="https://fontmeme.com/permalink/200227/3f9e8d2a7612f8591d3000047b68c607.png" alt="game-of-thrones-font" border="0" /></a>
                </div>}
              {locationList.length && locationList.map((val, idx) => {
                return <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                  <Toast>
                    <ToastHeader>
                      {idx + 1} - {val.name} - ({val.year}) | {val.battleType} | {val.region}
                    </ToastHeader>
                    <ToastBody>
                      {val.attackerKing} (Attacker King) V/S {val.defenderKing} (Defender King) <br />
                      Attacker Outcome - {val.attackerOutcome} | Major Deaths - {val.majorDeath} <br />
                      Attacker Commander - {val.attackerCommander} | Defender Commander - {val.defenderCommander} <br />
                      Major Capture - {val.majorCapture} | note - {val.note} <br />
                    </ToastBody>
                  </Toast>
                  <hr />
                </div>
              })}
            </div>
          </div>
        </div >
      </Fragment >
    );
  }
}

export default index;