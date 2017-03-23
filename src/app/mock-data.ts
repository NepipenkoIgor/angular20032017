import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export const users: Observable<User[]> = Observable.of([
  {
    'firstName': 'Максим',
    'surname': 'Пущинский',
    'country': 'ua'
  },
  {
    'firstName': 'Руслан',
    'surname': 'Касьянов',
    'photo': 'http://i.imgur.com/G40XVpa.jpg',
    'country': 'ru'
  },
  {
    'firstName': 'Alexander',
    'surname': 'Goncharuk',
    'photo': 'http://i.imgur.com/kcgp5mi.jpg',
    'country': 'lv'
  },
  {
    'firstName': 'Сергей',
    'surname': 'Чмиль',
    'photo': 'http://i.imgur.com/PTs0dBT.jpg',
    'country': 'ua'
  },
  {
    'firstName': 'Ирина',
    'surname': 'Коваль',
    'photo': 'http://i.imgur.com/1auy0g0.jpg',
    'country': 'by'
  },
  {
    'firstName': 'Адександр',
    'surname': 'Федотов',
    'country': 'ru'
  },
  {
    'firstName': 'Victor',
    'surname': 'Yang',
    'photo': 'http://i.imgur.com/iB5uYfb.png',
    'country': 'ru'
  },
  {
    'firstName': 'Александр',
    'surname': 'Комаров',
    'photo': 'http://i.imgur.com/aZ43Z4M.jpg',
    'country': 'ru'
  },
  {
    'firstName': 'Владимир',
    'surname': 'Федчишин',
    'photo': 'http://i.imgur.com/tnqK1M8.jpg',
    'country': 'ua'
  },
  {
    'firstName': 'Светлана',
    'surname': 'Атаманук',
    'country': 'ru'
  },
  {
    'firstName': 'Валерий',
    'surname': 'Благодарный',
    'photo': 'http://i.imgur.com/MjOVieK.jpg',
    'country': 'ru'
  },
  {
    'firstName': 'Kirill',
    'surname': 'Lavrov',
    'photo': 'http://i.imgur.com/6fUjfkI.jpg',
    'country': 'ru'
  },
  {
    'firstName': 'Сергей',
    'surname': 'Куличков',
    'country': 'ru'
  },
  {
    'firstName': 'Антон',
    'surname': 'Подгорный',
    'photo': 'http://i.imgur.com/jpcboqV.jpg',
    'country': 'ua'
  },
  {
    'firstName': 'Антон',
    'surname': 'Власов',
    'photo': 'http://i.imgur.com/CkQWMrL.png',
    'country': 'ru'
  },
  {
    'firstName': 'Мария',
    'surname': 'Лобачёва',
    'photo': 'http://i.imgur.com/1YLTdoM.jpg',
    'country': 'ua'
  },
  {
    'firstName': 'Дмитрий',
    'surname': 'Белик',
    'country': 'by'
  },
  {
    'firstName': 'Евгений',
    'surname': 'Забавнов',
    'photo': 'http://i.imgur.com/X1nIPeC.jpg',
    'country': 'ru'
  },
  {
    'firstName': 'Игорь',
    'surname': 'Бочаров',
    'photo': 'http://i.imgur.com/fBHAuX2.jpg',
    'country': 'ua'
  },
  {
    'firstName': 'Ilya',
    'surname': 'Rubtsov',
    'country': 'pl'
  },
  {
    'firstName': 'Vladimir',
    'surname': 'Bukhonov',
    'country': 'ru'
  }
]).delay(3000);