import React from 'react';

class UserAdd extends React.Component {




    handleSubmit=(e)=>{
        e.preventDefault();
        const {form: {name, age, gender}, formValid} = this.props;
        if (!formValid) {
            alert('请填写正确的信息后重试');
            return;
        }

        //alert(JSON.stringify(this.state));
        fetch('http://localhost:3000/user',{
            method:'post',
            body:JSON.stringify({
                name:name.value,
                age:age.value,
                gender:gender.value
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then((res)=>res.json())
            .then((data)=>{
                if(data.id){
                    alert("添加用户成功");
                    this.state({
                        name:'',
                        age:0,
                        gender:''
                    });
                }else{
                    alert("添加用户失败");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }


    handleValueChange (field, value, type = 'string') {
        // 由于表单的值都是字符串，我们可以根据传入type为number来手动转换value的类型为number类型
        if (type === 'number') {
            value = +value;
        }
        const {form: {name, age, gender}, onFormChange} = this.props;
        const newFildObj={value,valid:true,error:''};
        switch (field){
            case 'name':{
                if(value.length>=5){
                    newFildObj.error='用户名最多4个字符';
                    newFildObj.valid=false;
                }
                break;
            }
            case 'age':{
                if(value>100||value<=0){
                    newFildObj.error='请输入1~100之间的数';
                    newFildObj.valid=false;
                }
                break;
            }
            case 'gender':{
                if(!value){
                    newFieldObj.error='请选择性别';
                    newFildObj.valid==false;
                }
                break;
            }
         };
        this.setState({
            form:{
                ...form,
                [field]: newFildObj
            }
        });
    }

    render () {
        const {form: {name, age, gender}} = this.state;
        return (
            <div>
                <header>
                    <h1>添加用户</h1>
                </header>

                <main>
                    <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                        <label>用户名：</label>
                        <input type="text" value={name.value} onChange={(e) => this.handleValueChange('name', e.target.value)}/>
                        {!name.valid && <span>{name.error}</span>}
                        <br/>
                        <label>年龄：</label>
                        <input type="number"  value={age.value|| ''} onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}/>
                        {!age.valid && <span>{age.error}</span>}
                        <br/>
                        <label>性别：</label>
                        <select value={gender.value} onChange={(e) => this.handleValueChange('gender', e.target.value)} >
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        {!gender.valid && <span>{gender.error}</span>}
                        <br/>
                        <br/>
                        <input type="submit" value="提交"/>
                    </form>
                </main>
            </div>
        );
    }
}

export default UserAdd;