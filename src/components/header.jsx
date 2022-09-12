import { TypeAnimation } from 'react-type-animation';

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span> 
                  </span>
                </h1>
                  <TypeAnimation
                      // Same String at the start will only be typed once, initially
                      sequence={[
                      'For you',
                      4000,
                      'For your Personal Brand',
                      2000,
                      'For your Community',
                      2000,
                      'For your Business',
                      2000,
                      ]}
                      speed={50} // Custom Speed from 1-99 - Default Speed: 40
                      style={{ fontSize: '3em' }}
                      wrapper="h2" // Animation will be rendered as a <span>
                      repeat={Infinity} // Repeat this Animation Sequence infinitely
                    />
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
