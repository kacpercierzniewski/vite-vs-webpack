import * as lodash  from 'lodash-es';


const Lodash = () => {
    const str = lodash.camelCase('test lodash camel case')
    return <div>{str}</div>
}

export default Lodash