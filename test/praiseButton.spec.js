import PraiseButton from '../src/praiseButton.js';

describe('测试点赞组件', function () {
  it('addOne() 函数', function () {
      var a=new PraiseButton;
      a.add()
      expect(a.count).toBe(1);
  });
});