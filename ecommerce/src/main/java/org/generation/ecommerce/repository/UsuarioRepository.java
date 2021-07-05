package org.generation.ecommerce.repository;

import java.util.List;

import org.generation.ecommerce.model.Usuario;
import org.generation.ecommerce.model.util.TipoUsuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author hanely menezes
 *
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
	public List<Usuario> findByNomeContainingIgnoreCase(String nome);
	
}