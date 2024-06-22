/*
      window.document
      window.console.log('window');
      window.alert()
      */

      function handleCostKeydown(event) {
        if (event.key==='Enter') {
          calculateShipping()
        }
       }
       
      function calculateShipping () {
        let costIT = Number(document.querySelector('.js-cost').value);

        if (costIT < 40) {
          costIT += 10;
          document.querySelector('.js-calculate')
            .innerHTML = `$${costIT}`;
        } else if (costIT >= 40) {
          document.querySelector('.js-calculate')
            .innerHTML = 'FREE shipping';
        }

        
      }

      function subscribe () {
        const buttonElement = document.querySelector('.js-subscribe-button');

        if (buttonElement.innerHTML === 'Subscribe') {
          buttonElement.innerHTML = 'Subscribed';
          buttonElement.classList.add('is-subscribed');
        } else {
          buttonElement.innerHTML = 'Subscribe';
          buttonElement.classList.remove('is-subscribed');
        }
      }
