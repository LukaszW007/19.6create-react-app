import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbDown, thumbUp} from './actions'

const mapDispatchToPropsThumbUp = dispatch => ({
    thumbUp: (id) => dispatch(thumbUp(id))
});
const mapDispatchToPropsThumbDown = dispatch => ({
    thumbDown: (id) => dispatch(thumbDown(id))
});

export default connect(null, mapDispatchToPropsThumbDown)(Comment);
export default connect(null, mapDispatchToPropsThumbUp)(Comment);
