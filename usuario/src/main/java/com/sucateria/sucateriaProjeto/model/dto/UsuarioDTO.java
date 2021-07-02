package com.sucateria.sucateriaProjeto.model.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Classe DTO utilizada para atualizar dados do usuário
 * 
 * @author hanely
 * 
 */

public class UsuarioDTO {
	@NotNull(message = "Senha deve conter oito caracteres.")
	@Size(min = 8, max = 8)
	private String senha;

	// Special Methods
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
