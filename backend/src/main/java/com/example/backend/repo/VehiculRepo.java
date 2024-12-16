package com.example.backend.repo;

import com.example.backend.domain.Vehicul;
import org.hibernate.sql.ast.tree.expression.JdbcParameter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VehiculRepo extends JpaRepository<Vehicul, Long>
{
    Optional<Vehicul> findVehiculByIdVehicul(Long id);
}
