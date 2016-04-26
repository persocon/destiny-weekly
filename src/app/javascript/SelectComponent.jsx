import React from 'react';

class SelectComponent extends React.Component {
	render() {
		return (
			<div className="selectComponent">
    			<div className="selectWrap">
		    		<select>
			    		<option>Selecione uma Atividade</option>
			    		<option>Xur</option>
			    		<option>Desafio dos Anciões</option>
			    		<option>Anoitecer da Vanguarda</option>
			    		<option>Missão Diária da História</option>
			    		<option>Crisol Diário</option>
			    		<option>Crisol Semanal</option>
		    		</select>
	    		</div>
    		</div>
		);
	}
};

export default SelectComponent;