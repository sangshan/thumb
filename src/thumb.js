import praiseButton from './PraiseButton.js';
export class thumb extends praiseButton{
    constructor(){
        super();
    }
    change(){
        this.add();
        $('.count').text(this.count);
    }
}