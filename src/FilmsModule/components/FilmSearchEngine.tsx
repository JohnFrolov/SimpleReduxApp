import * as React from "react";
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStore, AsyncData} from '../../AppModels';
import {Film} from '../Model';
import {FilmActions} from '../actions/FilmAction';
import {FilmService} from '../service/FilmsService';
import {FilmDetails} from '../components/FilmDetails';
import "../style/FilmSearchEngine";

interface StateProps {
    film: AsyncData<Film>
}

interface DispatchProps {
    actions: FilmActions
}

interface State {
    searchValue: string;
}

type FilmSearchEngineProps = StateProps & DispatchProps;

class FilmSearchEngine extends React.Component<FilmSearchEngineProps, State> {
    constructor(props: FilmSearchEngineProps) {
        super(props);

        this.state = {
            searchValue: ""
        };
    }

    componentDidUpdate (prevProps: FilmSearchEngineProps): void {
        const {searchValue} = this.state;
        const {actions} = this.props;

        if (!!searchValue && !this.props.film.isLoading && this.props.film.isLoading === prevProps.film.isLoading)
            actions.getFilmsBy(searchValue);
    }

    shouldComponentUpdate (nextProps: FilmSearchEngineProps, nextState: State): boolean {
        const {searchValue: valueBeforeUpdate} = this.state;
        const {searchValue: valueAfterUpdate} = nextState;
       
        return !valueBeforeUpdate || valueBeforeUpdate !== valueAfterUpdate || nextProps !== this.props;
    }

    handleOnBlur = (event: any): void => {
        this.setState({searchValue :event.target.value})
    }

    render () {
        return (
            <div className="font-large center-box as-column">
                <div>
                    {"Find film by title"}
                </div>
                <div>
                    <input
                        className="form-input"
                        type="text"
                        onBlur={this.handleOnBlur}
                    />
                </div>
                {!!this.props.film.data && (
                    <FilmDetails
                        film={this.props.film.data}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state: AppStore): StateProps => ({
    film: state.filmsModule.film
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    actions: new FilmActions(dispatch, new FilmService())
})

const FilmSearchEngineContainer = connect(mapStateToProps, mapDispatchToProps)(FilmSearchEngine);

export {FilmSearchEngineContainer as FilmSearchEngine}
