import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, DatePicker, Input, Select, InputNumber } from 'antd';

const antdMap = { Input, Select, DatePicker, InputNumber };

function MyCell(props) {
  const { type, data, style } = props;
  const Component = antdMap[type];
  const { getFieldDecorator } = props.form;

  console.log(data);

  return (
		getFieldDecorator(data.name, {
			initialValue: data.value
    })(
      <Component style={style} />
    )
  )
}

class MyForm extends Component {
	render() {
		const { data, formData, form } = this.props;

		return (
			<Form className="form">
			  {
			    Object.keys(formData).map((key) => (
			    	<Form.Item key={key}>
			    		{
				        formData[key].type.map((type, index) => {
				        	const { valueKey } = formData[key];
				        	const name = valueKey[index];
				          const value = data[name];

				          const style = { width: formData[key].type.length > 1 ? '100px' : '200px' };

				          return (
				            <MyCell
				              type={type}
				              data={{name, value}}
				              key={name}
				              form={form}
				              style={style}
				            />
				          )
				        })
				      }
			      </Form.Item>
			    ))
			  }
			</Form>
		)
	}
}

MyForm.defaultProps = {

}

MyForm.propTypes = {
	data: PropTypes.object,
	formData: PropTypes.object
}

const WrappedForm = Form.create()(MyForm)

export default WrappedForm
