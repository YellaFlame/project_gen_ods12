package org.generation.ecommerce.repository;

import java.util.List;

import org.generation.ecommerce.model.Usuario;
<<<<<<< HEAD
import org.generation.ecommerce.model.util.TipoUsuario;
=======
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author hanely menezes
 *
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
<<<<<<< HEAD
	
	public List<Usuario> findByNomeContainingIgnoreCase(String nome);
	
=======
	public List<Usuario> findByNomeContainingIgnoreCase(String nome);

	public enum tipoUsuario {
		SUCATERIA, CONDONIME
	}
>>>>>>> d82f769e485cf5fb6af44baf352bc877cce0654c
}
