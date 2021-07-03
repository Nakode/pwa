/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import logo from '../assets/town.jpg';


const serviceOptions = [
  {title : 'Insights', url: '/insights'},
  {title : 'Promotions', url: '/promotions'},
  {title : 'Sales', url: 'sales'},
  {title : 'More'},
];


const mechandiseOptions = [
  {title : 'Warung Tekko Sunter', subtitle: 'Sunter new leabik woohanud iseh lish okahdy uuweide leabik woohanud iseh lish'},
  {title : 'Warung Tekko Sunter', subtitle: 'Sunter new leabik woohanud iseh lish okahdy uuweide leabik woohanud iseh lish'},
  {title : 'Warung Tekko Sunter', subtitle: 'Sunter new leabik woohanud iseh lish okahdy uuweide'},
  {title : 'Warung Tekko Sunter', subtitle: 'Sunter new leabik woohanud iseh lish okahdy uuweide'},
];

class Index extends React.Component {

  state = {
    fetch: false,
  };

  onFetchData = () => {
    setTimeout(() => {
      this.setState({fetch: true})
    }, 1000);
  }
  
  componentDidMount() {
    console.log('Index One - didMount lifecycle')
  }
  
  shouldComponentUpdate() {
    console.log('Index One - shouldComponentUpdate lifecycle');

    return false;
  }

  
  render() {
    console.log('Index One - Render lifecycle');

    return  (
    <div style={{position:'relative', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
      <img src={logo} height={200} width={'100%'} style={{objectFit:'cover'}} alt="logo" />

      <div style={{width:'100vw'}}>

        <div className={'shadow'} style={{margin: 20, position:'relative', height: 50, backgroundColor:"white", top: -35, borderRadius: 10, padding: 10}}>
        
        </div>

        <div className={'box'} style={{margin: 20}}>
          <h4 style={{color:'black', textAlign:'left'}}>Explore Connect 360</h4>
          <p style={{textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
            {serviceOptions.length} serivces available
          </p>
          <div style={{display:'flex', flexWrap:'wrap', marginTop: 12}}>
            {serviceOptions.map((item, index) => {
              return (
                <div className={'service-item shadow'} key={index} onClick={() => console.log(item.url)}>
                  <span style={{color:'black', fontSize: 8}}>{item.title}</span>
                </div>
              )        
            })}
          </div>
        </div>

        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
            <h4 style={{color:'black', textAlign:'left'}}>View New Merchandise</h4>
            <p style={{paddingTop: 2.5, textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>

          <div className="horizontal">
            {mechandiseOptions.map((item, index) => {
              return (
                <div className="merchandise-item shadow" key={index}>
                  <img src={logo} height={'65%'} width={'100%'} style={{objectFit:'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10}} alt="logo" />
                  <div style={{display:'flex', flexDirection:"column", width: "200px", padding: 10}}>
                    <p style={{color:'black', fontSize: 12, fontWeight: '600', textAlign:"left"}}>{item.title}</p>
                    <p style={{color:'black', fontSize: 8, textAlign:'left', paddingTop: 2.5}}>{item.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
            <h4 style={{color:'black', textAlign:'left'}}>New Distributors</h4>
            <p style={{paddingTop: 2.5, textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>

          <div className="horizontal">
            {mechandiseOptions.map((item, index) => {
              return(
                <div className="merchandise-item shadow" key={index}>
                  <img src={logo} height={'65%'} width={'100%'} style={{objectFit:'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10}} alt="logo" />
                  <div style={{display:'flex', flexDirection:"column", width: "200px", padding: 10}}>
                    <p style={{color:'black', fontSize: 12, fontWeight: '600', textAlign:"left"}}>{item.title}</p>
                    <p style={{color:'black', fontSize: 8, textAlign:'left', paddingTop: 2.5}}>{item.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
          <h4 style={{color:'black', textAlign:'left'}}>Upcoming Sales Trends</h4>
            <p style={{paddingTop: 2.5, textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>
        </div>

        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
          <h4 style={{color:'black', textAlign:'left'}}>Reward Program</h4>
            <p style={{paddingTop: 2.5, textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>
        </div>

        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
            <h4 style={{color:'black', textAlign:'left'}}>Covid 19 Merchandise</h4>
            <p style={{paddingTop: 2.5, textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>

          <div className="horizontal">
            {mechandiseOptions.map((item, index) => {
              return(
                <div className="merchandise-item shadow" key={index}>
                  <img src={logo} height={'65%'} width={'100%'} style={{objectFit:'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10}} alt="logo" />
                  <div style={{display:'flex', flexDirection:"column", width: "200px", padding: 10}}>
                    <p style={{color:'black', fontSize: 12, fontWeight: '600', textAlign:"left"}}>{item.title}</p>
                    <p style={{color:'black', fontSize: 8, textAlign:'left', paddingTop: 2.5}}>{item.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
          <h4 style={{color:'black', textAlign:'left'}}>Apply eyos grant</h4>
            <p style={{textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>
        </div>

        <div className={'box'}>
          <div style={{margin: '20px 20px 0px 20px'}}>
          <h4 style={{color:'black', textAlign:'left'}}>Your Shop Analytics</h4>
            <p style={{textAlign:'left', fontSize: 13, color:'rgba(0,0,0,0.5)'}}>
              {serviceOptions.length} serivces available
            </p>
          </div>
        </div>
     
      </div>
    </div>)
  }
}

export default Index;
