package org.generation.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.generation.ecommerce.model.Usuario;
import org.generation.ecommerce.model.dto.UsuarioDTO;
import org.generation.ecommerce.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 * 
 * @author hanely menezes
 *
 */
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
		return repositoryU.findById(novoUsuario.getIdUsuario()).map(usuarioExistente -> {
			return ResponseEntity.notFound().build();
		}).orElseGet(() -> {
			return ResponseEntity.status(201).body(repositoryU.save(novoUsuario));
		});
	}

	public ResponseEntity<Usuario> listarPorId(long idUsuario) {
		return repositoryU.findById(idUsuario).map(resposta -> ResponseEntity.ok(resposta))
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

	public Optional<Usuario> alterarSenha(Long idUsuario, UsuarioDTO senhaParaAtualizar) {
		return repositoryU.findById(idUsuario).map(senhaAtual -> {
			senhaAtual.setSenha(senhaParaAtualizar.getSenha());
			return Optional.ofNullable(repositoryU.save(senhaAtual));
		}).orElseGet(() -> {
			return Optional.empty();
		});
	}

	public ResponseEntity<String> deletarUsuario(Long idUsuario) {
		return repositoryU.findById(idUsuario).map(usuarioExistente -> {
			repositoryU.deleteById(usuarioExistente.getIdUsuario());
			return ResponseEntity.ok("Usuário deletado com sucesso!");
		}).orElseGet(() -> {
			return ResponseEntity.ok("Usuário não encontrado!");
		});
	}
}
