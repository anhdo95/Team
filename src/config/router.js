import Questions from 'containers/Questions';
import PostDetail from 'containers/PostDetail';

export default [
  { path: '/', component: Questions },
  { path: '/questions', component: Questions },
  { path: '/questions/:questionId', component: PostDetail },
];
