/**
 * @author William Bruno
 * @date 2014-09-01
 * @github https://github.com/wbruno/examples/tree/gh-pages/time-counter
 */

function _getDateEnd ($element) {
  var dataEnd = $element.getAttribute('data-end').split('-'),
      date = new Date(dataEnd[0], dataEnd[1]-1, dataEnd[2], dataEnd[3], dataEnd[4], dataEnd[5]);

  return !isNaN(date) ? date : new Date();
}

function _timePad (n) {
  return n < 10 ? '0' + n : n;
}

function _timeLeft (now, end) {
  if (now <= end) {
    var seconds = parseInt((end - now) / 1000, 10),
        minutes = parseInt(seconds / 60, 10),
        hours   = parseInt(minutes / 60, 10),
        days    = parseInt(hours / 24, 10),
        left    = '';

    seconds = seconds - (minutes * 60);
    minutes = minutes - (hours * 60);
    hours   = hours   - (days * 24);

    left += (days && days > 1) ? days + ' dias, ' : (days === 1 ? '1 dia, ' : '');
    left += (toString(hours).length) ? hours + 'h ' : '';
    left += (toString(minutes).length) ? _timePad(minutes) + 'm ' : '';
    left += _timePad(seconds) + 's';

    if (days + hours + minutes + seconds > 0) {
      return left;
    } else {
      return 'Tempo esgotado!!!!';
    }
  } else {
    return 'Tempo esgotado!!!!';
  }
}

function timeCounter ($elements) {
  $elements.forEach(function ($each) {
    $each.innerHTML = _timeLeft(new Date(), _getDateEnd($each));
  });
}
