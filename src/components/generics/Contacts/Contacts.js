import React, { PureComponent } from 'react'
import './contacts.scss'

class Contacts extends PureComponent {

  render () {
    return (
      <div className='contacts__wrapper'>
        <div className='contacts__column col col-xs-100 col-md-50 col-lg-33'>
          <span className='contacts__label'>{'Адрес:'}</span>
          <ul>
            <li>{'София 1220, Бул. Рожен 22,'}</li>
            <li>{'входа зад бензиностанция OMV,'}</li>
            <li>{'Логистичен център Рожен, сграда В, етаж 2'}</li>
          </ul>
        </div>
        <div className='contacts__column col col-xs-100 col-md-50 col-lg-33'>
          <span className='contacts__label'>{'Телефон:'}</span>
          <ul>
            <li>{'02/9202303'}</li>
            <li>{'02/9200230'}</li>
            <li>{'02/9203545'}</li>
            <li>{'02/9200614'}</li>
          </ul>
          <span className='contacts__label'>{'Факс:'}</span>
          <ul>
            <li>{'02/9202071'}</li>
            <li>{'02/8221616'}</li>
          </ul>
        </div>
        <div className='contacts__column col col-xs-100 col-md-50 col-lg-33'>
          <span className='contacts__label'>{'Email:'}</span>
          <ul>
            <li><a href='mailto:order@hermesgift.bg?Subject=Запитване'>{'order@hermesgift.bg'}</a></li>
            <li><a href='mailto:sales@hermesgift.bg?Subject=Запитване'>{'sales@hermesgift.bg'}</a></li>
            <li><a href='mailto:g.staneva@hermesgift.bg?Subject=Запитване'>{'g.staneva@hermesgift.bg'}</a></li>
            <li><a href='mailto:stefana@hermesgift.bg?Subject=Запитване'>{'stefana@hermesgift.bg'}</a></li>
            <li><a href='mailto:veselina@hermesgift.bg?Subject=Запитване'>{'veselina@hermesgift.bg'}</a></li>
            <li><a href='mailto:tihomira@hermesgift.bg?Subject=Запитване'>{'tihomira@hermesgift.bg'}</a></li>
            <li><a href='mailto:doroteya@hermesgift.bg?Subject=Запитване'>{'doroteya@hermesgift.bg'}</a></li>
            <li><a href='mailto:anna@hermesgift.bg?Subject=Запитване'>{'anna@hermesgift.bg'}</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contacts
