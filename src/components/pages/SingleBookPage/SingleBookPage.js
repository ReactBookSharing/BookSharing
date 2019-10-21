import React from 'react';
import './SingleBookPage.css';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import { connect } from 'react-redux';
class SingleBookPage extends React.Component {
  state = {
    book: null
  };
  
  UNSAFE_componentWillMount() {
    let { book } = this.props;
    if (!book) {
      const bookItem = JSON.parse(localStorage.getItem('bookToSee'));
      if (bookItem) {
        this.setState({
          book: bookItem
        });
      } else {
        this.props.history.push('/');
      }
    } else {
      localStorage.setItem('bookToSee', JSON.stringify(book));
      this.setState({
        book: book
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.book !== this.props.book) {
      this.setState({
        book: this.props.book
      });
    }
  }
  render() {
    let { book } = this.state;
    return (
      <div className="SingleBookPage">
        <Header />
        <div className="container SingleBookPage__container">
          <div className="row">
            <div className={`ProfileRight col-12`}>
              <div className="">
                {book ? (
                  <div className="">
                    <div className="border-0">
                      <div className="border-left border-right border-top br-tr-3 border-bottom br-br-3 br-bl-3 p-5 bg-white mb-4">
                        <div className="">
                          <h3 className="card-title mb-3 font-weight-semibold">
                            {book.title}
                          </h3>
                          <div className="mb-4">
                            <div className="row">
                              <div className="col-12 col-md-6">
                                <img
                                  src={book.photos}
                                  alt=""
                                  className="SingleBookPage__img"
                                />
                              </div>
                              <p className="col-12 col-md-6">
                                On the other hand, we denounce with righteous
                                indignation and dislike men who are so beguiled
                                and demoraliz the charms of pleasure of the
                                moment, so blinded by desire, that they cannot
                                foresee the pain and trouble thena bound to
                                ensue; and equal blame belongs to those who fail
                                in their duty through weakness of will, which is
                                the same as saying through shrinking from toil
                                and pain.
                              </p>
                            </div>
                          </div>
                          <h4 className="mb-4">Характеристики</h4>
                          <div className="row">
                            <div className="col-xl-12 col-md-12">
                              <div className="table-responsive">
                                <table className="table table-bordered w-100 m-0 text-nowrap ">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <span className="font-weight-bold">
                                          Название :
                                        </span>{' '}
                                        {book.title}
                                      </td>
                                      <td>
                                        <span className="font-weight-bold">
                                          Статус :
                                        </span>{' '}
                                        {book.status}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="font-weight-bold">
                                          Автор :
                                        </span>{' '}
                                        {book.author}
                                      </td>
                                      <td>
                                        <span className="font-weight-bold">
                                          Жанр :
                                        </span>{' '}
                                        {book.genre}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="font-weight-bold">
                                          Цена :
                                        </span>{' '}
                                        {book.price}
                                      </td>
                                      <td>
                                        <span className="font-weight-bold">
                                          Язык написания :
                                        </span>{' '}
                                        {book.lang}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <span className="font-weight-bold">
                                          Владелец :
                                        </span>
                                        {book.owner.user.name}{' '}
                                        {book.owner.user.surname}
                                      </td>
                                      {/* <td>
                                        <span className="font-weight-bold">
                                          Power Windows :
                                        </span>{' '}
                                        Available{' '}
                                      </td> */}
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : ''}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    book: state.book.book
  };
}
export default connect(
  mapStateToProps,
  {}
)(SingleBookPage);
