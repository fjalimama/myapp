// import React from 'react';
// import { connect } from 'dva';
// import styles from './IndexPage.css';

// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);


import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  render() {
    const { dispatch , count } = this.props;
    const aa=count.count1;
    console.log(aa)
    
    return (
      <div className={styles.normal}>
        <div className={styles.record}>
         Highest Record: {aa.record} 
        </div>
        <div className={styles.current}>
         {aa.current}  
        </div>
        <div className={styles.button}>
          <button onClick={() => { dispatch({ type: 'count1/add1' });} } >
                 +
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return { count : state };
} // 获取state

export default connect(mapStateToProps)(IndexPage);