package com.sucateria.sucateriaProjeto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sucateria.sucateriaProjeto.model.Usuario;
import com.sucateria.sucateriaProjeto.model.dto.UsuarioDTO;
import com.sucateria.sucateriaProjeto.repository.UsuarioRepository;

@Service
public class UsuarioService {
	@Autowired
	private UsuarioRepository repositoryU;

	/**
	 * 
	 * @param novoUsuario,
	 * @return
	 */
	public ResponseEntity<Object> cadastrarUsuario(Usuario novoUsuario) {
		return repositoryU.findById(novoUsuario.getId_usuario()).map(usuarioExistente -> {
			return ResponseEntity.notFound().build();
		}).orElseGet(() -> {
			return ResponseEntity.status(201).body(repositoryU.save(novoUsuario));
		});
	}

	public ResponseEntity<Usuario> listarPorId(long id_usuario) {
		return repositoryU.findById(id_usuario).map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}

	public ResponseEntity<List<Usuario>> listarPorNome(String nome) {
		List<Usuario> nomeExistente = repositoryU.findByNomeContainingIgnoreCase(nome);

		if (nomeExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(nomeExistente);
		}
	}

	public Optional<Usuario> alterarSenha(Long id_usuario, UsuarioDTO senhaParaAtualizar) {
		return repositoryU.findById(id_usuario).map(senhaAtual -> {
			senhaAtual.setSenha(senhaParaAtualizar.getSenha());
			return Optional.ofNullable(repositoryU.save(senhaAtual));
		}).orElseGet(() -> {
			return Optional.empty();
		});
	}

	public ResponseEntity<String> deletarUsuario(Long id_usuario) {
		return repositoryU.findById(id_usuario).map(usuarioExistente -> {
			repositoryU.deleteById(usuarioExistente.getId_usuario());
			return ResponseEntity.ok("Foi Deletado!");
		}).orElseGet(() -> {
			return ResponseEntity.ok("Usuario não encontrado!");
		});
	}
}
