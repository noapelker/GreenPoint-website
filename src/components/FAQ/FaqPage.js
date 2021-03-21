import React, {Component} from 'react';
import QuestionAnswer from "./QuestionAnswer";
import {questions} from './questions';
import '../Common/common.css';
import ContactPage from "../Common/ContactPage";

class FaqPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.state = {
            openQuestions: {}
        }
    }

    questionClicked = index => {
        const openQuestions = {...this.state.openQuestions};
        openQuestions[index] = !openQuestions[index];
        this.setState({openQuestions});
    };

    render() {
        return (
            <>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className={'page_top_root'}>
                    <img className={'page_top_img'} src={'/images/questionBackground.jpg'} alt={''} />
                    <div className={'page_top_bg'}>
                        <span className={'page_top_textFAQ'}>שאלות נפוצות</span>
                    </div>
                </div>
                <div style={{
                    marginTop: 60,
                    marginBottom: 60,
                    paddingLeft: '20%',
                    paddingRight: '20%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {questions.map((question, index) =>
                        <QuestionAnswer key={index}
                                        onClick={() => {
                                            this.questionClicked(index);
                                        }}
                                        open={this.state.openQuestions[index]}
                                        question={question.question}
                                        answer={question.answer}/>
                    )}
                </div>
            </div>
                <div style={{height: 0,background:'white' }}/>
                <ContactPage/></>
        );
    }
}

export default FaqPage;