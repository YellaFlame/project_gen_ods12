package org.generation.ecommerce.service;

import java.nio.charset.Charset;


import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.generation.ecommerce.model.dto.UserLogin;
import org.generation.ecommerce.model.Usuario;
import org.generation.ecommerce.model.dto.UsuarioDTO;
import org.generation.ecommerce.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

			String senhaEncoder = encoder.encode(novoUsuario.getSenha());

			novoUsuario.setSenha(senhaEncoder);

			return ResponseEntity.status(201).body(repositoryU.save(novoUsuario));
		});
	}

	public Optional<UserLogin> logar(Optional<UserLogin> usuarioLogin) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = repositoryU.findByUsuario(usuarioLogin.get().getUsuario());

		if (usuario.isPresent()) {
			if (encoder.matches(usuarioLogin.get().getSenha(), usuario.get().getSenha())) {

				String auth = usuarioLogin.get().getUsuario() + ":" + usuarioLogin.get().getSenha();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);

				usuarioLogin.get().setToken(authHeader);
				usuarioLogin.get().setNome(usuario.get().getNome());

				return usuarioLogin;
			}
		}
		return Optional.empty();
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
