import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbDown, thumbUp} from './actions'


const mapDispatchToPropsThumbDown = dispatch => ({
    thumbDown: (id) => dispatch(thumbDown(id)),
    thumbUp: (id) => dispatch(thumbUp(id))

});


export default connect(null, mapDispatchToPropsThumbDown)(Comment);
