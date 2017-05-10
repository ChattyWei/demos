/**
 * Created by wanghaijiang on 2017/2/3.
 */

import React from 'react';
import _ from 'lodash';
import store from '../../model/store.js';

class ContainerComponent extends React.Component {

    constructor(props) {

        super(props);

        this.refreshFlag = store.getState().common.refreshFlag;

        store.subscribe(() => {

            let refreshFlag = store.getState().common.refreshFlag;

            if (refreshFlag !== this.refreshFlag) {

                this.refreshFlag = refreshFlag;

                this.props.routeParamsChange && this.props.routeParamsChange(this.props.params, this.props);

            }

        });

    }

    componentDidMount() {

        this.props.init && this.props.init(this.props);

        this.props.routeParamsChange && this.props.routeParamsChange(this.props.params, this.props);

    }

    componentWillUnmount() {

        this.props.uninit && this.props.uninit(this.props);

    }

    componentWillReceiveProps(nextProps) {

        if (_.isEqual(this.props.params, nextProps.params)
            && _.isEqual(this.props.location, nextProps.location)) {

            return;

        }

        this.props.routeParamsChange && this.props.routeParamsChange(nextProps.params, nextProps);

    }

}

export default ContainerComponent;